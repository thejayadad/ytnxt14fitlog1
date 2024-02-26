import React from 'react'
import {Card, CardHeader, CardBody,  Divider, Input, Textarea, Button} from "@nextui-org/react";
import { addExercise } from '@/lib/action';


const NewExercisePage = () => {
  return (
    <section className='px-4 py-8'>
      <Card className='max-w-screen-md mx-auto'>
          <CardHeader>
            TheFitnessTracker
          </CardHeader>
          <Divider />
          <CardBody>
            <form
            action={addExercise}
            className='flex flex-col items-center p-4 gap-6'
            >
              <Input
              className='w-full'
              placeholder='Name...'
              autoComplete='false'
              name='name'
              />
              <div className='flex gap-4 w-full'>
                <Input
                  type='number'
                  placeholder='Duration'
                  name='duration'
                />
                <Input
                  type='number'
                  placeholder='Calories'
                  name='calories'
                />
              </div>
              <select
              name='mood'
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
                placeholder='Rating'
              />
              <Textarea
                name='notes'
                placeholder='Notes...'
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

export default NewExercisePage