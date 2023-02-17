import { FC, ReactElement, useState, useEffect, useContext } from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  SelectChangeEvent,
  Button,
  LinearProgress,
  Alert,
  AlertTitle 
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';

// components
import AddTitleField from './AddTitleField';
import AddCodeField from './AddCodeField';
import AddDueDateField from './AddDueDateField';
import AddSelectField from './AddSelectField';
import AddMultiSelectField from './AddMultiSelectField';

// helpers, enums, interfaces 
import { Difficulty } from '../enums/Difficulty';
import { Status } from '../enums/Status';
import { Category } from '../enums/Category';
import { sendApiRequest } from '../helpers/sendApiRequest';
import { ICreateCard } from '../interfaces/ICreateCard';

// context
import { CardStatusChangeContext } from '../../context';

const AddForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [code, setCode] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [status, setStatus] = useState<string>(Status.todo);
  const [difficulty, setDifficulty] = useState<string>(Difficulty.easy);
  const [categories, setCategories] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);  

  const cardsUpdateContext = useContext(CardStatusChangeContext);

  const handleCategoryChange = (e: SelectChangeEvent<typeof categories>) => {
    const { target: { value } } = e;
    setCategories(typeof value === 'string' ? value.split('') : value);
  }

  const handleFormSubmit = () => {
    if (!title || !date || !code || !date || !categories.length) {
      return; // missing fields
    }
    const card: ICreateCard = {
      title,
      code,
      date: date.toString(),
      status,
      difficulty,
      categories
    };
    createCardMutation.mutate(card);
  }

  const createCardMutation = useMutation((data: ICreateCard)=>
    sendApiRequest(
      'http://localhost:3000/cards',
      'POST',
      data
    )
  );

  useEffect(() => {
    if (createCardMutation.isSuccess) {
      setShowSuccess(true);
      cardsUpdateContext.toggle();
    }
    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
    return () => {
      clearTimeout(successTimeout);
    }
  }, [createCardMutation.isSuccess]);



  return (
    <Box display='flex' flexDirection={'column'} alignItems='flex-start'
      width={'100%'} px={4} my={6}>
      {showSuccess && 
      <Alert
        severity='success'
        sx={{width: '100%', marginBottom: '16px'}} >
        <AlertTitle>Success</AlertTitle>
        The flashcard has been created!
      </Alert>}

      <Typography mb={2} component='h2' variant='h6'>Create new Flash Card</Typography>
      
      <Stack width='100%' spacing={2}>
        {/* Problem Title  */}
        <AddTitleField onChange={(e)=>setTitle(e.target.value)} disabled={createCardMutation.isLoading} />
        
        {/* Code  */}
        <AddCodeField onChange={(e)=>setCode(e.target.value)} disabled={createCardMutation.isLoading}/>

        {/* Due Date  */}
        <AddDueDateField value={date} onChange={(date)=>setDate(date as Date)} disabled={createCardMutation.isLoading}/>

        {/* Category */}
        
        <AddMultiSelectField label='Category' name='category'
          items={Object.values(Category).map((category) => (
            {value: category, label: category}
          ))} 
          values={categories} onChange={handleCategoryChange} disabled={createCardMutation.isLoading}/>

        <Stack direction='row' spacing={2} width='100%'>
          {/* Status */}
          <AddSelectField label='Status' name='status' 
            items={Object.values(Status).map((status) => (
              {value: status, label: status}
            ))}
            value={status} onChange={(e)=>setStatus(e.target.value as string)} disabled={createCardMutation.isLoading}/>
          {/* Difficulty */}
          <AddSelectField label='Difficulty' name='difficulty'
            items={Object.values(Difficulty).map((diff) => (
              {value: diff, label: diff}
            ))} 
            value={difficulty} onChange={(e)=>setDifficulty(e.target.value as string)} disabled={createCardMutation.isLoading}/>
        </Stack>
        {createCardMutation.isLoading && <LinearProgress />}
        <Button disabled={!title||!code||!date||!status||!difficulty||!categories.length||createCardMutation.isLoading} 
          onClick={handleFormSubmit} variant='contained' size='large' fullWidth>Create Card</Button>
      </Stack>
    </Box>
  )
}

export default AddForm;