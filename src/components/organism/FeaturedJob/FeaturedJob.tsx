import { TitleSection } from '@/components';
import React, { FC } from 'react';
import FeaturedJobItem from './FeaturedJobItem';

interface FeaturedJobProps {}

const FeaturedJob: FC<FeaturedJobProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="Jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2, 3].map((item: number) => (
          <div key={item}>
            <FeaturedJobItem
              categories={['Category 1', 'Category 2']}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, justo nec ultricies elementum, justo felis aliquet nunc, vitae vestibulum justo libero id justo."
              image="/images/company.png"
              jobType="Full Time"
              location="Jakarta"
              name="Job Name"
              type="Category"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
