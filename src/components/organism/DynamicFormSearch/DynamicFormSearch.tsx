import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';
import { optionType } from '@/types';
import { LOCATION_OPTIONS } from '@/constants';

interface DynamicFormSearchProps {}

const DynamicFormSearch: FC<DynamicFormSearchProps> = ({}) => {
  return (
    <div className="mx-auto w-max">
      <div className="bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max text-center">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-5 w-[350px] border-none"
            placeholder="Job Title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <HiOutlineLocationMarker className="w-6 h-6" />
          <Select>
            {/* data-[placeholder] is for styling placeholder */}
            <SelectTrigger className="w-[350px] border-none py-5 outline-none data-[placeholder]:text-gray-500">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                <SelectItem key={`option-${i}-${item.id}`} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </div>
  );
};

export default DynamicFormSearch;
