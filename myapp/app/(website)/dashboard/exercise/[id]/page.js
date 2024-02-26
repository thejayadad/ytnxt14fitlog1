import React from 'react'
import {Card, CardHeader, CardBody,  Divider, Input, Textarea, Button} from "@nextui-org/react";
import { getSingleExercise } from '@/lib/data';
import { updateExercise } from '@/lib/action';


const SingleExercisePage = async ({params}) => {
  const {id} = params;
  const exercise = await getSingleExercise(id)

  return (
    <section className='px-4 py-8'>
  <Card className='max-w-screen-md mx-auto'>
          <CardHeader>
            TheFitnessTracker
          </CardHeader>
          <Divider />
          <CardBody>
            <form
            className='flex flex-col items-center p-4 gap-6'
            action={updateExercise}
            >
              <input type='text' name='id' hidden defaultValue={exercise.id} />
              <Input
              className='w-full'
              defaultValue={exercise.name}
              autoComplete='false'
              name='name'
              id='name'
              />
              <div className='flex gap-4 w-full'>
                <Input
                  type='number'
                  defaultValue={exercise.duration}
                  name='duration'
                  id='duration'
                />
                <Input
                  type='number'
                  defaultValue={exercise.calories}
                  name='calories'
                  id='calories'
                />
              </div>
              <select
              name='mood'
              id='mood'
              defaultValue={exercise.mood}
              className='w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700'
              > 
              <option value='amazing'>Amazing</option>
              <option value='solid job'>Solid Work</option>
              <option value='glad its over'>Glad Its Over</option>

              </select>
              <label>Rating</label>
              <Input
                type='number'
                name='rating'
                id='rating'
                defaultValue={exercise.rating}
              />
              <Textarea
                name='notes'
                id='notes'
                defaultValue={exercise.notes}
              />
              <Button
              type='submit'
              className='bg-primary w-full'
              >
                Post Exercise
              </Button>
            </form>
          </CardBody>
     </Card>
    </section>
  )
}

export default SingleExercisePage