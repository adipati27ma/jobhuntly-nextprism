import React, { FC } from 'react';
import Image from 'next/image';
import { JobType } from '@/types';
import { Badge, Separator } from '@/components';

interface LatestJobItemProps extends JobType {}

const LatestJobItem: FC<LatestJobItemProps> = ({
  categories,
  description,
  image,
  jobType,
  location,
  name,
  type,
}) => {
  return (
    <div className="border border-border p-8 flex flex-row items-start gap-6 cursor-pointer">
      <div>
        <Image src={image} alt="company" width={80} height={80} />
      </div>
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground mb-2">
          {type} . {location}
        </div>
        <div className="h-5 inline-flex gap-2 items-center">
          <Badge variant="secondary">{jobType}</Badge>
          <Separator orientation="vertical" />
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="rounded border-primary bg-primary/5 text-primary"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobItem;
