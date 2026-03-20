import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { JobType } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';

interface JobCardProps extends JobType {}

const JobCard: FC<JobCardProps> = ({
  applicants,
  categories,
  description,
  image,
  jobType,
  location,
  name,
  needs,
  type,
}) => {
  return (
    <div className="w-full border p-6 border-border flex flex-row justify-between items-center mb-4">
      <div className="flex flex-row items-start gap-6">
        <div>
          <Image
            src={image}
            alt={`company ${name} logo image`}
            width={64}
            height={64}
          />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {type} . {location}
          </div>
          <div className="h-5 inline-flex gap-2 items-center">
            <Badge variant="outline">{jobType}</Badge>
            <Separator orientation="vertical" />
            {categories.map((category: string, index: number) => (
              <Badge key={`${index}-${category}`}>{category}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[200px]">
        <Button className="w-full" size="lg">
          Apply Now
        </Button>
        <Progress
          value={(applicants / needs) * 100}
          className="my-2 bg-gray-300"
          indicatorClassName="bg-green-500"
        />
        <div className="text-gray-500 text-sm text-center">
          <span className="text-black font-semibold">
            {applicants} applied{' '}
          </span>
          of {needs} capacity
        </div>
      </div>
    </div>
  );
};

export default JobCard;
