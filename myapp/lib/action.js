'use server'
import connectDB from "./db"
import Exercise from "@/models/Exercise"
import {revalidatePath} from "next/cache"
import {redirect} from "next/navigation"

export const addExercise = async(formData) => {
    const {name, duration, rating, calories, notes, mood} = Object.fromEntries(formData)
    try {
        await connectDB()
        const newExercise = new Exercise({
            name, duration, rating, calories, notes, mood 
        })
        await newExercise.save()
    } catch (error) {
        throw new Error("Failed To Add Exercise " + error)
    }
    revalidatePath("/dashboard")
    redirect("/dashboard")
}


//DELETE EXERCISE
export const deleteExercise = async(formData) => {
    const {id} = Object.fromEntries(formData)
    try {
        await connectDB()

        await Exercise.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed To Delete Exercise " + error)

    }
    revalidatePath("/")
}

//UPDATE SINGLE EXERCISE

export const updateExercise = async(formData) => {
    const {id, name, duration, rating, calories, notes, mood} = Object.fromEntries(formData)
    try {
        await connectDB()
        const updateFields = {
            name, duration, rating, calories, notes, mood
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])
        await Exercise.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("Failed To Update Exercise " + error)

    }
    revalidatePath("/dashboard")
    redirect("/dashboard")

}