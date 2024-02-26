import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import Link from 'next/link';
import DeleteIcon from '../Buttons/DeleteIcon';
import RatingDisplay from './RatingDisplay';
import MoodDisplay from './MoodDisplay';
import { deleteExercise } from '@/lib/action';

const ExerciseCard = ({exercise}) => {
  return (
   <Card
   className='max-w-screen-sm'
   >
    <CardHeader>
        <div
        className='flex w-full justify-between p-4'
        >
        <p>
        <Link href={`/dashboard/exercise/${exercise.id}`}>
            {exercise.name}
        </Link>
        </p>
       <form
       action={deleteExercise}
       >
        <input hidden name='id' defaultValue={exercise.id}/>
       <button>
            <DeleteIcon />
        </button>
       </form>
        </div>
    </CardHeader>
    <CardBody>
        <div className='flex justify-around p-4'>
            <div className='flex flex-col items-center'>
                <span className='font-bold'>Duration</span>
                <span className='font-light'>{exercise.duration} Minutes</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='font-bold'>Calories</span>
                <span className='font-light'>{exercise.calories}</span>
            </div>
        </div>
    </CardBody>
    <CardFooter>
        <div className='flex w-full justify-between p-4'>
            <RatingDisplay rating={exercise.rating} />
            <MoodDisplay mood={exercise.mood} />
        </div>
    </CardFooter>
   </Card>
  )
}

export default ExerciseCard