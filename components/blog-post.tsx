import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { merriweatherSerif } from "@/app/fonts/fonts";

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  slug: string;
  coverImage: string;
}

export function BlogPost({
                           title,
                           excerpt,
                           author,
                           date,
                           slug,
                           coverImage,
                         }: BlogPostProps) {
  return (
      <article className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
        <Link href={`/${slug}`}>
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
                src={coverImage}
                alt={title}
                width={1200}
                height={630}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h2
                className={`text-2xl font-semibold tracking-tight ${merriweatherSerif.variable}`}
            >
              {title}
            </h2>
            <p
                className={`text-black ${merriweatherSerif.variable}`}
            >
              {excerpt}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                  src={author.image}
                  alt={author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
              />
              <div className="text-sm">
                <p className="font-medium">{author.name}</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>{formatDate(date)}</p>
            </div>
          </div>
        </Link>
      </article>
  );
}
