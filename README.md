## এসাইনমেন্টে আপনাকে যা যা করতে হবেঃ

✓ আমাদের দেয়া, HTML টেমপ্লেট এর কোড গুলো নিয়ে, নতুন একটি Vite প্রোজেক্ট initate করে সম্পুর্ন scratch থেকে এই এসাইনমেন্টটি করতে হবে । দ্বিতীয় মডিউলে দেখানো প্রোজেক্টটি আপনি সরাসরি ক্লোন করে সেখানে এসাইনমেন্টটি করতে পারবেন না । 

✓ এই প্রজেক্টের State Management এর ক্ষেত্রে আপনাকে অবশ্যই Context API এবং useReducer ব্যবহার করতে হবে । 

✓ আপনার প্রজেক্টের "Add Task" বাটনে ক্লিক করলে আপনাকে একটি popup দেখাতে হবে এবং সেই popup-এ প্রয়োজনীয় তথ্য প্রদান করে "Create New Task" বাটনে ক্লিক করলে Task List এ নতুন Task হিসেবে যুক্ত হবে । Popup তৈরির জন্যে আলাদা কোন প্যাকেজ ব্যবহার করতে পারবেন না । 

✓ নতুন Task তৈরি করার ক্ষেত্রে বেসিক কিছু ভ্যালিডেশন থাকতে হবে । অর্থাৎ কেউ যদি Title, Description, Tags বা Priority সেট না করেই "Create New Task" বাটনে ক্লিক করে, তাহলে সাবমিট না হয়ে একটি warrning দেখাবে । Warrning টি আপনি চাইলে Alert এর মাধ্যমেও দেখাতে পারেন অথবা Text আকারে popup এর মধ্যেও দেখাতে পারেন । তবে warning এর জন্যে আপনি চাইলে [React Toastify](https://www.npmjs.com/package/react-toastify) প্যাকেজ ব্যবহার করতে পারেন, এটি সম্পুর্ন ঐচ্ছিক । তবে React Toastify ব্যাতিত অন্য কিছু আপনি ব্যবহার করতে পারবেন না । সেই সাথে ফর্ম ভ্যালিডেশন বা ফর্ম হ্যান্ডেলিং এর জন্যেও অন্য কোন প্যাকেজ ব্যবহার করতে পারবেন না । 

✓ নতুন Task তৈরির পাশাপাশি, এডিট করারও অপশন থাকবে, এডিট এর ক্ষেত্রেও ভ্যালিডেশন থাকতে হবে । 

✓ Task ডিলিট বাটনে ক্লিক করলে, Task টি Task List থেকে রিমুভ হয়ে যাবে । 

✓ "Delete All" বাটনে ক্লিক করলে সব গুলো Task Delete হয়ে যাবে ।

✓ বেসিক সার্চ ফিচার থাকবে। সার্চবার-এ কোন কিছু লিখলে সেটি Task List এই ফিল্টার করে দেখাবে এবং সার্চ বার ফাকা থাকলে, সব গুলো Task-ই Task List-এ দেখাবে । এক্ষেত্রে, সার্চ শুধু Task Title দিয়েই হবে । 

✓ Task গুলো Favourite এবং Unfavourite-এ toggle করা যাবে । 

✓ Task add করার সময় Tag ইনপুট নেয়ার সময় কমা সেপারেটেড করে ইনপুট নিতে হবে। যেমন "python,javascript,java" - এরকম। কিন্তু লিস্টে দেখানোর সময় কমা সেপারেটেড করে দেখানো যাবেনা। ঠিক HTML template এ যেভাবে দেখিয়ে দেয়া হয়েছে, সেভাবে দেখাতে হবে।

✓ TaskList এ Task গুলো দেখানোর সময় tag গুলোকে HTML Template এ দেখিয়ে দেয়া tag এর মতো করে দেখাতে হবে। template এ প্রতিটি tag এর আলাদা color দেয়া হয়েছে। যেহেতু Task add করার ফর্মে আমরা tag এর color input নিচ্ছিনা, তাই আপনি চাইলে tag list এ দেখানোর সময় random color দিয়ে tag box গুলো ডিসাইন করে দিতে পারেন। অথবা চাইলে সব tag এর একই color দিতে পারেন।

✓ Task লিস্টে যখন কোন Task থাকবে না, তখন সেখানে সুন্দর করে দেখাতে হবে - "Task List is empty!" । 

✓ সব শেষে এটি খেয়াল রাখতে হবে, পুরো এসাইনমেন্টে আপনি যথাযত জায়গায় Context API এবং useReducer ব্যবহার করেছেন । সেই সাথে আমাদের দেয়া HTML Template কে হুবহু React এ কনভার্ট করেছেন, **প্রয়োজন ব্যাতিত** কোন ধরনের লিখা, ছবি, রঙ, আইকন, সাইজ বা অন্য কোন কিছুর পরিবর্তন করা ছাড়া । 

## কিভাবে সাবমিট করবেন:

সবচেয়ে সহজে বুঝার জন্য [এই ভিডিওটি](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) দেখে ফেলুন।

এসাইনমেন্টে আপনাকে মাত্র দুইটা জিনিস সাবমিট করতে হবে।

1. **GitHub private repository link:** অবশ্যই সঠিক গিটহাব রিপোজিটরি লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা।
2. **Live site link:** নেটলিফাইতে বা ভার্সেলে সাইট হোস্ট করে সাইটের লাইভ লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা। নেটলিফাইতে বা ভার্সেলে কি ভাবে হোস্ট করতে হয় তা আপনি না জানলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-deploy-your-project-to-vercel-free) করে দেখে নিতে পারেন।

**সাবমিট একবারই করতে পারবেন তাই ভালো করে দেখে সাবমিট করবেন।**

## GitHub private repository কিভাবে তৈরি করবেন:

Github Private repositoty তৈরি করতে [এইখানে ক্লিক করুন](https://classroom.github.com/a/rFki5xkX) অথবা ব্রাউজারে এই লিংকে **https://classroom.github.com/a/rFki5xkX** ভিজিট করুন। লিংকে যাওয়ার পরে **Accept this assignment** এ ক্লিক করুন। সর্বোচ্চ ১ মিনিট পরে পেইজটি রিলোড দিলে আপনি আপনার রিপোজেটরি লিংক পেয়ে যাবেন। মনে রাখবেন, আপনাকে এই লিংকটি আমাদের প্লাটফর্মে সাবমিট করতে হবে। না বুঝলে উপরে বলা ভিডিও টিউটোরিয়ালটি দেখে নিন।

## Assignment এর জন্য প্রয়োজনীয় template HTML:

প্রতিটি assignment এর সাথে প্রয়োজনীয় HTML template আমরা দিয়ে দিয়েছি যেন আপনাকে HTML template নিয়ে সময় নষ্ট না করতে হয়। কোর্সের GitHub repository এর সংশ্লিষ্ট ব্রাঞ্চে গেলেই আপনারা 'dist' folder এর ভিতর HTML template পাবেন। না বুঝলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) করে টিউটোরিয়াল দেখে নিতে পারেন।

## এসাইনমেন্ট মার্কস পলিসি:

আপনি নির্ধারিত সময়ে এসাইনমেন্ট জমা দিলে এবং সব কিছু সঠিকভাবে করলে সম্পূর্ণ মার্ক পাবেন। এর পরে জমা দিলে আপনার মার্ক নিচের নিয়মে কাটা যাবে -

1. ডেডলাইনের পরে এক ঘণ্টার মধ্যে জমা দিলে 10% মার্ক কাটা যাবে।
2. ডেডলাইনের পরে এক ঘণ্টার বেশি কিন্তু 24 ঘণ্টার মধ্যে জমা দিলে 30% মার্ক কাটা যাবে।
3. ডেডলাইনের পরে 24 ঘণ্টার বেশি পরে জমা দিলে 50% মার্ক কাটা যাবে।
4. কোর্স ডিউরেশনের পরে আমরা এসাইনমেন্ট গ্রহণ করবো না।

অবশ্যই কোর্স চলাকালিন সময়ে এসাইনমেন্ট জমা দিতে হবে। কোর্সের ডিউরেশন শেষ হয়ে গেলে তার পরে আপনি এসাইনমেন্টে জমা দিলে এসাইনমেন্টের মার্ক পাবেন না।

## সাবমিট করার পর কোড পরিবর্তন:

আপনি ভেবে নিতে পারেন আপনি ওয়েবসাইটে সঠিক সময়ে এসাইনমেন্ট সাবমিট করে নীরবে পরে গিটহাবে কোড পুশ করতে থাকবেন! আপনার গিটহাবের সর্বশেষ কমিট দেখলেই আমরা বুঝতে পারবো আপনি কখন কোড আপডেট করেছেন। সে অনুযায়ী আমরা আপনার মার্ক কেটে নিবো। তাই এসাইনমেন্ট এর সময় পার হবার পরে আমরা আশা করবো আপনি চালাকি করে আর কোড পুশ করবেন না আপনার রিপোজিটরিতে। এটা করলে আপনার সম্পূর্ণ মার্ক কাটা যেতে পারে।

## এসাইনমেন্ট মার্কস কবে পাবেন:

আমরা সর্বোচ্চ ১৫ কার্যদিবসের ভিতরে এসাইনমেন্টের মার্ক দিয়ে দেওয়ার চেষ্টা করবো। ক্ষেত্র বিশেষে একটু দেরি হতে পারে কারো কারো মার্ক পেতে।