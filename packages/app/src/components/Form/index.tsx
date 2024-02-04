
import {
  Form,
  useNavigate,
  useNavigation,
  json,
  redirect,
} from 'react-router-dom';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';




interface Event {
  name: string;
  level: number;
  type: {
    species: string;
    subspecies: string;
  },
  image: string;
}

interface MonsterFormProps {
  event?: Event;
}

function MonsterForm({ event }: MonsterFormProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }
  const inputStyles = {
    color:'#2e2e2e',
    '&:after': {
      borderBottomColor: '#bfa77f !important',
    },
  };
  return (
    <Form
      method='post'
      style={{ width: '100%' }}
    >
      <Stack
        direction={"column"}
        spacing={2}
        sx={{ width: '100%' }}
      >
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={event ? event.name : ''}
          sx={inputStyles}
        />
        <InputLabel htmlFor="level">Level</InputLabel>
        <Input
          id="level"
          type="number"
          name="level"
          required
          defaultValue={event ? event.level : ''}
          sx={inputStyles}
        />



        <InputLabel htmlFor="species">Species</InputLabel>
        <Input
          id="species"
          type="text"
          name="species"
          required
          defaultValue={event ? event.type.species : ''}
          sx={inputStyles}
        />



        <InputLabel htmlFor="subspecies">Sub Species</InputLabel>
        <Input
          id="subspecies"
          type="text"
          name="subspecies"
          required
          sx={inputStyles}
          defaultValue={event ? event.type.subspecies : ''}
        />


        <InputLabel htmlFor="image">Image</InputLabel>
        <Input
          id="image"
          type="url"
          name="image"
          required
          sx={inputStyles}
          defaultValue={event ? event.image : ''}
        />

        <ButtonGroup aria-label="outlined button group" sx={{
          display: 'flex'
        }} >
          <Button type="button" onClick={cancelHandler} disabled={isSubmitting} sx={{
            backgroundColor: '#bfa77f',
            color: '#2e2e2e',
            border: '1px solid #2e2e2e',
            '&:hover': {
              backgroundColor: '#8c7757',
            },
          }}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} sx={{
            backgroundColor: '#bfa77f',
            color: '#2e2e2e',
            border: '1px solid #2e2e2e',

            '&:hover': {
              backgroundColor: '#8c7757',
              border: '1px solid #2e2e2e',

            },
          }}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </Button>
        </ButtonGroup>
      </Stack>

    </Form>
  );
}

export default MonsterForm;

export async function action({ request, params }: any) {
  const method = request.method;
  const data = await request.formData();
  const eventData: Event = {
    name: data.get('name'),
    level: parseInt(data.get('level')),
    type: {
      species: data.get('species'),
      subspecies: data.get('subspecies'),
    },
    image: data.get('image'),
  };
 
  let url = 'http://localhost:3005/api/monster';

  if (method === 'POST') {

    url = 'http://localhost:3005/api/monster';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }

  return redirect('/route2');
}
