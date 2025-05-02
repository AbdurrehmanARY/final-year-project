import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const VerifyEmailDialog = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden border rounded-lg">
        <div className="p-6 pt-8 text-center">
          <h2 className="text-2xl font-medium mb-4">Verify your Email</h2>
          <p className="text-gray-500 mb-4">
            Thank you, check your email for instructions to reset your password
          </p>
          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">Don't receive an email?</span>
            <Button variant="link" className="text-orange-500 p-0 h-auto">
              Resend
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyEmailDialog;
