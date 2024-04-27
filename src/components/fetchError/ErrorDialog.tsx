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

const ErrorDialog = ({ error }: { error: string }) => {

    const [ isOpen, setIsOpen ] = useState(true)

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent className="bg-slate-100 text-black rounded-lg">

                <AlertDialogHeader>
                    <AlertDialogTitle> Ups! </AlertDialogTitle>
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
export default ErrorDialog
