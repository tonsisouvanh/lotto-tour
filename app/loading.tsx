import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';
import React from 'react';

export default function loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md px-8">
        <div className="mb-8 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <h1 className="mb-4 text-center text-2xl font-semibold">Loading your experience...</h1>
        <Progress value={50} className="mb-4 w-full" />
        <p className="text-center text-sm text-muted-foreground">
          This may take a few moments. Thanks for your patience!
        </p>
      </div>
    </div>
  );
}

// import { Loader2 } from "lucide-react"
// import { Progress } from "@/components/ui/progress"
// import { useEffect, useState } from "react"

// export default function LoadingPage() {
//   const [progress, setProgress] = useState(13)

//   useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-background">
//       <div className="w-full max-w-md px-8">
//         <div className="flex items-center justify-center mb-8">
//           <Loader2 className="h-12 w-12 animate-spin text-primary" />
//         </div>
//         <h1 className="text-2xl font-semibold text-center mb-4">Loading your experience...</h1>
//         <Progress value={progress} className="w-full mb-4" />
//         <p className="text-center text-sm text-muted-foreground">
//           This may take a few moments. Thanks for your patience!
//         </p>
//       </div>
//     </div>
//   )
// }
