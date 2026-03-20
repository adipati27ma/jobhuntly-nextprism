import { Badge } from '@/components/ui/badge';
import { CompanyType } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';

interface CompanyCardProps extends CompanyType {}

const CompanyCard: FC<CompanyCardProps> = ({
  name,
  image,
  industry,
  description,
  jobCount,
}) => {
  return (
    <div className="border border-border p-6 cursor-pointer">
      <div className="flex flex-row justify-between items-start">
        <Image src={image} alt={`${name} logo image`} width={64} height={64} />
        <Badge className="rounded">{jobCount} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div className="line-clamp-3 text-sm text-muted-foreground">
          <p>{description}</p>
        </div>
      </div>
      <div className="space-x-2">
        <Badge variant="outline" className="rounded">
          {industry}
        </Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
