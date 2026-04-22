export interface QuoteRequest {
  customerInfo: {
    fullName: string;
    email: string;
    phoneNumber?: string;
  };
  projectSpecs: {
    title: string;
    description: string;
    intendedUse: string;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    quantity: number;
    preferredMaterial: string;
    preferredColour: string;
    desiredFinishQuality: string;
    deadline?: Date;
    additionalNotes?: string;
    uploadedFiles?: File[];
  };
  estimatedPriceBreakdown: {
    basePrintCost: number;
    materialSurcharge: number;
    detailSurcharge: number;
    rushFee?: number;
    finishingFee?: number;
    quantityMultiplier: number;
    totalEstimate: number;
  };
  status: 'pending' | 'completed' | 'rejected';
  createdAt: Date;
}