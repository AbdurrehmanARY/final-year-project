import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { useForm } from "react-hook-form"
import { useState } from "react";

const ForgotPasswordDialog = ({open,onOpenChange  }) => {
  const{register,handleSubmit}=useForm()
    const [formData,setFormData]=useState({})
  
    const onSubmitForm = (data) => setFormData(data)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent
  className="sm:max-w-md p-0 gap-0 overflow-hidden border rounded-lg"
  
>
  <DialogTitle className="sr-only">Forgot Password</DialogTitle>
  <DialogDescription>
  
  <form onSubmit={handleSubmit(onSubmitForm)} className="p-6 pt-8">
    <div className="flex justify-center items-center mb-4">
      <h2 className="text-2xl font-medium">Forgot Password</h2>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
        {...register('email')}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="h-12"
        />
      </div>
      <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12">
        Continue
      </Button>
    </div>
  </form>
  </DialogDescription>
</DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
