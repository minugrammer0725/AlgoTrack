import { FC, ReactElement, useState } from 'react';

import { Box, Typography, Stack, SelectChangeEvent } from '@mui/material';

import AddTitleField from './AddTitleField';
import AddCodeField from './AddCodeField';
import AddDueDateField from './AddDueDateField';
import AddSelectField from './AddSelectField';
import AddMultiSelectField from './AddMultiSelectField';

import { Difficulty } from '../enums/Difficulty';
import { Status } from '../enums/Status';
import { Category } from '../enums/Category';

const AddForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [code, setCode] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [difficulty, setDifficulty] = useState<string>(Difficulty.easy);
  const [categories, setCategories] = useState<string[]>([]);

  const handleCategoryChange = (e: SelectChangeEvent<typeof categories>) => {
    const { target: { value } } = e;
    setCategories(typeof value === 'string' ? value.split('') : value);
  }

  return (
    <Box display='flex' flexDirection={'column'} alignItems='flex-start'
      width={'100%'} px={4} my={6}>
      <Typography mb={2} component='h2' variant='h6'>Create new Flash Card!</Typography>
      
      <Stack width='100%' spacing={2}>
        {/* Problem Title  */}
        <AddTitleField onChange={(e)=>setTitle(e.target.value)}/>
        
        {/* Code  */}
        <AddCodeField onChange={(e)=>setCode(e.target.value)}/>

        {/* Due Date  */}
        <AddDueDateField value={date} onChange={(date)=>setDate(date as Date)}/>

        {/* Category */}
        
        <AddMultiSelectField label='Category' name='category'
          items={Object.values(Category).map((category) => (
            {value: category, label: category}
          ))} 
          values={categories} onChange={handleCategoryChange}/>

        <Stack direction='row' spacing={2} width='100%'>
          {/* Status */}
          <AddSelectField label='Status' name='status' 
            items={Object.values(Status).map((status) => (
              {value: status, label: status}
            ))}
            value={status} onChange={(e)=>setStatus(e.target.value as string)} />
          {/* Priority => Difficulty? */}
          <AddSelectField label='Difficulty' name='difficulty'
            items={Object.values(Difficulty).map((diff) => (
              {value: diff, label: diff}
            ))} 
            value={difficulty} onChange={(e)=>setDifficulty(e.target.value as string)} />
        </Stack>
        

      </Stack>

      
    </Box>
  )
}

export default AddForm;