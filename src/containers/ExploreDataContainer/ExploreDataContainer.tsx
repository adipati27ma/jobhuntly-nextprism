import { DynamicFormSearch } from '@/components';
import DynamicFormFilter from '@/components/organism/DynamicFormFilter';
import JobCard from '@/components/organism/JobCard';
import { CompanyType, filterGroupType, JobType } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';

interface ExploreDataContainerProps {
  RHFormFilter?: any;
  onSubmitFilter: (values: any) => Promise<void>;
  filterGroup: filterGroupType[];
  loading: boolean;
  title: string;
  subtitle: string;
  data: JobType[] | CompanyType[];
  pageType: 'job' | 'company';
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  RHFormFilter,
  onSubmitFilter,
  filterGroup,
  loading,
  title,
  subtitle,
  data,
  pageType,
}) => {
  return (
    <>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mx-auto mb-11 text-center flex justify-center gap-2">
            <span className="text-5xl font-semibold">Find Your</span>
            <div className="relative">
              <span className="text-5xl font-semibold text-primary">
                {title}
              </span>
              <div className="absolute top-10 w-[220px] h-10">
                <Image
                  src="/images/pattern2.png"
                  alt="pattern2 image"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">{subtitle}</div>
        </div>
        <div>
          <DynamicFormSearch />
        </div>
      </div>
      <div className="mt-20 mb-16 px-32 flex flex-row item-start gap-10">
        <div className="w-1/5">
          <DynamicFormFilter
            RHFormFilter={RHFormFilter}
            onSubmitFilter={onSubmitFilter}
            filterGroup={filterGroup}
          />
        </div>
        <div className="w-4/5">
          <div className="mb-8">
            <div className="text-3xl font-semibold">All Jobs</div>
            <div className="text-muted-foreground">Showing 73 Results</div>

            <div className="mt-5">
              {loading ? (
                <div>Loading...</div>
              ) : (
                data?.map((item: JobType | CompanyType, i: number) => {
                  if (pageType === 'job' && 'jobType' in item) {
                    return <JobCard key={`${i}-${item.name}`} {...item} />;
                  }
                  return 'Company Card is under development-';
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
