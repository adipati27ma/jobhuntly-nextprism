import React, { FC } from 'react';
import Image from 'next/image';
import { Badge } from '@/components';

interface FeaturedJobItemProps {
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  categories: string[];
}

const FeaturedJobItem: FC<FeaturedJobItemProps> = ({
  categories,
  desc,
  image,
  jobType,
  location,
  name,
  type,
}) => {
  return (
    <div className="border border-border p-6 cursor-pointer">
      <div className="flex flex-row justify-between items-start">
        <Image src={image} alt={name} width={48} height={48} />
        <span className="px-4 py-1 text-xs font-semibold text-primary border border-primary">
          {jobType}
        </span>
      </div>
      <div className="my-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-muted-foreground mb-3">
          {type} . {location}
        </div>
        <div className="text-muted-foreground h-12 line-clamp-2 text-ellipsis">
          {desc}
        </div>
      </div>
      <div className="space-x-2">
        {categories.map((category: string, index: number) => (
          <Badge key={index}>{category}</Badge>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobItem;
