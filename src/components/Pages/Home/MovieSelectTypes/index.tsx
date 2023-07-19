import React from 'react';
import {ContainerPropTypes} from './types';
import View from './view';
import {selectMovieFilters, setFilterKey, setFilterState} from "@/store/slices/movie";
import {useRTKDispatch, useRTKSelector} from "@/store/hooks";

const MovieSelectTypesContainer: React.FC<ContainerPropTypes> = () => {
  const dispatch = useRTKDispatch();
  const { filterKey } = useRTKSelector(selectMovieFilters);

  const onChange = (e: any) => {
    dispatch(setFilterKey(e.target.value));
    dispatch(setFilterState({
      key: 'category',
      value: e.target.value,
    }));
  }

  return <View selectedValue={filterKey} onChange={onChange} />
}
export default React.memo(MovieSelectTypesContainer);