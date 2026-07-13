import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter = useMemo(
    () =>
      !filterValue || filterValue === "all"
        ? null
        : { field: "status", value: filterValue },
    [filterValue]
  );

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = useMemo(() => ({ field, direction }), [field, direction]);

  // Page
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Prefetch adjacent pages
  const pageCount = Math.ceil(count / PAGE_SIZE);
  useEffect(
    function () {
      if (page < pageCount)
        queryClient.prefetchQuery({
          queryKey: ["bookings", filter, sortBy, page + 1],
          queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
        });

      if (page > 1)
        queryClient.prefetchQuery({
          queryKey: ["bookings", filter, sortBy, page - 1],
          queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
        });
    },
    [queryClient, filter, sortBy, page, pageCount]
  );

  return { bookings, count, isLoading, error };
}
