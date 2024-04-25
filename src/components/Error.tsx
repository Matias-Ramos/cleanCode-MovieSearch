import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { useState } from "react"


const Error = ({ error }: { error: string }) => {
    const [ isOpen, setIsOpen ] = useState(true)

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent >

                <AlertDialogHeader>
                    <AlertDialogTitle> Ups! An error occurred. </AlertDialogTitle>
                    <AlertDialogDescription> {error} </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel onClick={()=>{setIsOpen(false)}}>
                        Continue
                    </AlertDialogCancel>
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>

    )
}
export default Error
