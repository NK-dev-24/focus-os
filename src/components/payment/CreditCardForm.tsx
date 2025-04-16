
import React from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

const CreditCardForm = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="space-y-4">
        {/* Card Number */}
        <div>
          <label className="text-sm text-gray-500 block mb-1">Card Number</label>
          <Input 
            type="text"
            value="4242 4242 4242 4242"
            className="font-mono bg-gray-50 focus:border-[#FF6B6B] border-2 transition-colors"
            readOnly
          />
        </div>

        {/* Expiry and CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500 block mb-1">Expiry Date</label>
            <Input 
              type="text"
              value="04/30"
              className="font-mono bg-gray-50 focus:border-[#FF6B6B] border-2 transition-colors"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 block mb-1">CVC</label>
            <Input 
              type="text"
              value="123"
              className="font-mono bg-gray-50 focus:border-[#FF6B6B] border-2 transition-colors"
              readOnly
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="text-sm text-gray-500 block mb-1">Cardholder Name</label>
          <Input 
            type="text"
            value="Doomscroll Danny"
            className="bg-gray-50 focus:border-[#FF6B6B] border-2 transition-colors"
            readOnly
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-500 block mb-1">Email</label>
          <Input 
            type="email"
            value="danny@example.com"
            className="bg-gray-50 focus:border-[#FF6B6B] border-2 transition-colors"
            readOnly
          />
        </div>

        <div className="text-xs text-gray-500 mt-2 italic">
          This is a demo form. We're not taking your money — just your word.
        </div>
      </div>

      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">No subscription. No trackers. Just a promise.</span>
        </div>
        <Badge variant="outline" className="text-xs">
          SECURED
        </Badge>
      </div>
    </div>
  );
};

export default CreditCardForm;
