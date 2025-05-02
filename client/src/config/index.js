export const brand = [
  { label: "Samsung" },
  { label: "Apple" },
  { label: "Xiaomi" },
  { label: "Realme" },
  { label: "OnePlus" },
  { label: "Oppo" },
  { label: "Vivo" },
  { label: "Huawei" },
  { label: "Infinix" },
  { label: "Tecno" },
  { label: "Motorola" },
  { label: "Nokia" },
  { label: "Sony" },
  { label: "Asus" },
  { label: "Google" },
  { label: "Honor" },
  { label: "ZTE" },
  { label: "Lenovo" },
  { label: "Itel" },
  { label: "HTC" }
];



  export const category = [
    {  label: "Mobile Phones" },
    {  label: "Cases and Covers" },
    {  label: "Screen Protectors" },
    { label: "Chargers and Cables" },
    {  label: "Power Banks" },
    {  label: "Earphones / Headphones / TWS" },
    {  label: "Smartwatches" },
    {  label: "Mobile Gaming Accessories" }
  ];
  

  export const specs= [
    { 
      heading:'Display',
      spec:[
        {id: "displaySize", label: "Display size", placeholder:"6.8 inches" 
      , option : [
        {  label: 'none' },

            {  label: '4.0"' },
            {  label: '4.7"' },
            {  label: '5.0"' },
            {  label: '5.5"' },
            {  label: '5.8"' },
            {  label: '6.0"' },
            {  label: '6.1"' },
            {  label: '6.2"' },
            {  label: '6.3"' },
            {  label: '6.4"' },
            {  label: '6.5"' },
            {  label: '6.6"' },
            {  label: '6.7"' },
            {  label: '6.8"' },
            {  label: '6.9"' },
            {  label: '7.0"' },
            {  label: '7.2"' },
            {  label: '7.6"' },
            {  label: '7.9"' },
            {  label: '8.0"' }
          ]
          
        },


        { id: "displaytype", label: "Display Type"  , placeholder:"e.g, AMOLED" ,
          option : [
        {  label: 'none' },

            { label: "LCD" },
            { label: "IPS LCD" },
            { label: "TFT LCD" },
            { label: "PLS LCD" },
            { label: "OLED" },
            // { label: "AMOLED" },
            // { label: "Super AMOLED" },
            // { label: "Dynamic AMOLED" },
            // { label: "Dynamic AMOLED 2X" },
          
          ]
          
        },
        { id: "resolution", label: "Resolution" , placeholder:"e.g, 3200 x 1440 (QHD+)" ,
           option : [
        {  label: 'none' },

            { label: "HD (1280 x 720)" },
            { label: "HD+ (1600 x 720)" },
            { label: "Full HD (1920 x 1080)" },
            { label: "Full HD+ (2400 x 1080)" },
            { label: "Quad HD (2560 x 1440)" },
            { label: "Quad HD+ (2960 x 1440)" },
            { label: "4K (3840 x 2160)" },
            { label: "4K+ (4120 x 2160)" },
            // { label: "Ultra HD (5120 x 2880)" },
            // { label: "8K (7680 x 4320)" },
            // { label: "Retina Display" }
          ]
          
        } ,
        { id: "refreshRate", label: "Refresh Rate ", placeholder:"e.g, 120Hz ",
          option:[
        {  label: 'none' },

            { label: "60Hz" },
            { label: "90Hz" },
            { label: "120Hz" },
            { label: "144Hz" },
            { label: "165Hz" },
            { label: "240Hz" },
            { label: "360Hz" },
            { label: "120Hz Adaptive" },
            { label: "240Hz Adaptive" },
            { label: "120Hz Dynamic" }
          ]
        },
        
        

      ]},

      { 
        heading:'Memory',
        spec:[
          {id: "storage", label: "Storage" ,placeholder:'e.g., 4/64 8/128',
             option : [
        {  label: 'none' },

              { label: "2GB / 16GB" },
              { label: "3GB / 32GB" },
              { label: "4GB / 64GB" },
              { label: "4GB / 128GB" },
              { label: "6GB / 64GB" },
              { label: "6GB / 128GB" },
              { label: "6GB / 256GB" },
              { label: "8GB / 128GB" },
              { label: "8GB / 256GB" },
              { label: "8GB / 512GB" },
              { label: "12GB / 128GB" },
              { label: "12GB / 256GB" },
              { label: "12GB / 512GB" },
              { label: "16GB / 128GB" },
              { label: "16GB / 256GB" },
              { label: "16GB / 512GB" },
              { label: "16GB / 1TB" }
            ]
            
          },
        ]},

        { 
          heading:'Camera',
          spec:[
            {id: "backCamera", label: "Back Camera" ,placeholder:'e.g., 48MP+8MP+2MP+2MP',option:[]},
            {id: "frontCamera", label: "Front Camera" ,placeholder:'e.g., 16MP',option:[]},

          ]},


          { 
            heading:'Battery and Charging',
            spec:[
              {id: "battery", label: "Battery" ,placeholder:'e.g.,5000mAh',
                option : [
                  { label: "none" },

                  { label: "100mAh" },
                  { label: "200mAh" },
                  { label: "300mAh" },

                  { label: "1000mAh" },
                  { label: "1500mAh" },
                  { label: "2000mAh" },
                  { label: "2500mAh" },
                  { label: "3000mAh" },
                  { label: "3500mAh" },
                  { label: "4000mAh" },
                  { label: "4500mAh" },
                  { label: "5000mAh" },
                  { label: "6000mAh" },
                  { label: "7000mAh" },
                  { label: "8000mAh" },
                  { label: "10000mAh" },
                  { label: "20000mAh" },

                ]
                

              },
              {id: "charging", label: "charging" ,placeholder:'e.g.,15W',
                option : [
        {  label: 'none' },

                  { label: "5W" },
                  { label: "10W" },
                  { label: "15W" },
                  { label: "18W" },
                  { label: "20W" },
                  { label: "25W" },
                  { label: "30W" },
                  { label: "33W" },
                  { label: "40W" },
                  { label: "50W" },
                  { label: "65W" },
                  { label: "100W" },
                  { label: "120W" },
                  { label: "150W" }
                ]
                

              },
              {id: "usbPort", label: "USB Port" ,placeholder:'e.g.,USB Type-C 3.2',
                option : [
        {  label: 'none' },

                  { label: "USB Type-C" },
                
                  { label: "Micro-USB" },
                  { label: "Lightning" }
                ]
                
              },


            ]},

            { 
              heading:'Network Connectivity',
              spec:[
                {id: "sim", label: "Sim Support" ,placeholder:'e.g,Single SIM',
                  option :[
        {  label: 'none' },

                    { label: "Single SIM" },
                    { label: "Dual SIM" },
                    { label: "Dual SIM + eSIM" }
                  ]
                  
                },
                {id: "network", label: "Network" ,placeholder:'e.g.,5G/4G/3G',
                   option : [
        {  label: 'none' },

                    { label: "2G/3G/4G" },
                    { label: "2G/3G/4G LTE" },

                    { label: "3G/4G/5G" },
                   
                  ]
                  
                },
  
              ]},

        { 
          heading:'Operating System',
          spec:[
            {id: "os", label: "OS" ,placeholder:'e.g., Android 14',

              option : [
        {  label: 'none' },

                { label: "Android 4.4 KitKat" },
                { label: "Android 5.0 Lollipop" },
                { label: "Android 6.0 Marshmallow" },
                { label: "Android 7.0 Nougat" },
                { label: "Android 8.0 Oreo" },
                { label: "Android 9.0 Pie" },
                { label: "Android 10" },
                { label: "Android 11" },
                { label: "Android 12" },
                { label: "Android 13" },
                { label: "Android 14" }
              ]
              
            },
          ]},
          { 
            heading:'Processor',
            spec:[
              {id: "processor", label: "Processor" ,placeholder:'e.g., Qualcomm Snapdragon 8 Gen 3',option:[]},
              {id: "untututu", label: "Untututu Score" ,placeholder:'e.g., 2756000',option:[]},

            ]},
          


      
   
  ]

  export const stockStatus=[
    {label:'In Stock'},
    {label:'Low on Stock'},
    {label:'Out of Stock'},



  ]