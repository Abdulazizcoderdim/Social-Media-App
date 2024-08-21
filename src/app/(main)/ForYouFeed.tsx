"use client";

import { PostData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export default function ForYouFeed() {
  const query = useQuery<PostData[]>({
    queryKey: ["post-feed", "for-you"],
    queryFn: async () => {
      const res = await fetch("/api/posts/for-you");
      if (!res.ok) {
        throw Error(`Request failed with status code ${res.status}`);
      }
      return res.json();
    },
  });
}
