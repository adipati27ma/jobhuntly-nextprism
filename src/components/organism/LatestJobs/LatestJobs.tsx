import React, { FC } from 'react';
import { TitleSection } from '@/components';
import LatestJobItem from './LatestJobItem';

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = ({}) => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />

      <div className="mt-12 grid grid-cols-3 gap-8">
        {[0, 1, 2].map((item: number) => (
          <LatestJobItem
            key={item}
            image="/images/company2.png"
            name="Social Media Assistant"
            type="Agency"
            location="Paris, France"
            jobType="Full Time"
            categories={['Category 1', 'Category 2']}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, justo nec ultricies elementum, justo felis aliquet nunc, vitae vestibulum justo libero id justo."
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
