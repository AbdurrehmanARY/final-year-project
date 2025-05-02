import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const SuccessDialog = ({ trigger, message, buttonText, onButtonClick }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden border rounded-lg">
        <div className="p-6 pt-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full border-2 border-gray-200 p-3">
              <Check className="h-6 w-6" />
            </div>
          </div>
          <h2 className="text-2xl font-medium mb-2">Congratulations!</h2>
          <p className="text-gray-500 mb-6">{message}</p>
          <Button 
            onClick={onButtonClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
