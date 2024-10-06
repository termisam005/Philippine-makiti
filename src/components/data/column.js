
export const routeTrans = {
  height: 80,
  complexColumns: [
    {
      header: 'Basic',
      name: 'mergeColumn1',
      childNames: ['', '']
    },
    {
      header: 'Extra',
      name: 'mergeColumn2',
      childNames: ['', '', '']
    },
    {
      header: 'Detail',
      name: 'mergeColumn3',
      childNames: ['mergeColumn1', 'mergeColumn2']
    },
    {
      header: 'Count',
      name: 'mergeColumn4',
      childNames: ['downloadCount', 'listenCount']
    },
    // {
    //   header: 'Album Info',
    //   name: 'mergeColumn5',
    //   childNames: ['mergeColumn3', 'mergeColumn4']
    // }
  ]
};

export const routeColumns = [
    {
      header: 'Name',
      name: 'name'
    },
    {
      header: 'Artist',
      name: 'artist'
    },
    {
      header: 'Type',
      name: 'type'
    },
    {
      header: 'Release',
      name: 'release'
    },
    {
      header: 'Genre',
      name: 'genre'
    },
    {
      header: 'Price',
      name: 'price'
    },
    {
      header: 'Download',
      name: 'downloadCount'
    },
    {
      header: 'Listen',
      name: 'listenCount'
    }
]


export const dashData = [
  {   
    id: 1, 
    Vehicle: "Hover", 
    Collection: "Hover",
    Transport: "Hover",
    Fare: "Hover",
    Total: "Hover",
  },
  {   
    id: 2, 
    Vehicle: "Row", 
    Collection: "Row",
    Transport: "Row",
    Fare: "Row",
    Total: "Row",
  },
  
];
export const dashColumns = [
  {
    name: 'Vehicle',
    header: 'Vehicle Number',
  },
  {
    name: 'Collection',
    header: 'Collection Statistics Date',
  },
  {
    name: 'Transport',
    header: 'Transport Card User',
  },
  {
    name: 'Fare',
    header: 'Fare/Count',
  },
  {
    name: 'Total',
    header: 'Total Amount',
  },
];

export const dashTrans = {
height: 80,
};


// Average Revenue by Transport Company

export const averageTrans = {
  height: 80,
  complexColumns: [
    {
      header: 'Basic',
      name: 'mergeColumn1',
      childNames: ['', '']
    },
    {
      header: 'Extra',
      name: 'mergeColumn2',
      childNames: ['', '', '']
    },
    {
      header: 'Detail',
      name: 'mergeColumn3',
      childNames: ['regularnonCount', 'regularCount']
    },
    {
      header: 'Student',
      name: 'mergeColumn4',
      childNames: ['studentnonCount', 'studentCount']
    },
    {
      header: 'MakatiZen Subtotal',
      name: 'mergeColumn5',
      childNames: ['subtotalnonCount', 'subtotalCount']
    },
    {
      header: 'Regular',
      name: 'mergeColumn6',
      childNames: ['elderlynonCount', 'elderlyCount']
    },
    {
      header: 'Makati Zen',
      name: 'mergeColumn7',
      childNames: ['mergeColumn3', 'mergeColumn4', 'mergeColumn5', 'mergeColumn6']
    }
  ]
};

export const averageColumns = [
    {
      header: 'Transport Company',
      name: 'TransportCompany'
    },
    {
      header: 'Collection Statistics Date',
      name: 'CollectionStatisticsDate'
    },
    {
      header: 'Category',
      name: 'category'
    },
    {
      header: 'Total Amount',
      name: 'totalamount'
    },
    {
      header: 'MakatiZen Total Amount',
      name: 'makatiZentotalamount'
    },
    {
      header: 'Non-Transfer',
      name: 'subtotalnonCount'
    },
    {
      header: 'Transfer',
      name: 'subtotalCount'
    },
    {
      header: 'Non-Transfer',
      name: 'regularnonCount'
    },
    {
      header: 'Transfer',
      name: 'regularCount'
    },
    {
      header: 'Non-Transfer',
      name: 'studentnonCount'
    },
    {
      header: 'Transfer',
      name: 'studentCount'
    },
    {
      header: 'Non - Transfer',
      name: 'elderlynonCount'
    },
    {
      header: 'Transfer',
      name: 'elderlyCount'
    },
];

export const averagedata = [
  {   id: 1, 
      TransportCompany: "Row", 
      CollectionStatisticsDate: "Row",
      category: "Row",
      totalamount: "Row",
      makatiZentotalamount: "Row",
      subtotalnonCount: "Row", 
      subtotalCount: "Row", 
      regularnonCount: "Row",
      regularCount: "Row",
      studentnonCount: "Row",
      studentCount: "Row",
      elderlynonCount: "Row", 
      elderlyCount: "Row", 
  },
  {   id: 2, 
      TransportCompany: "Row", 
      CollectionStatisticsDate: "Row",
      category: "Row",
      totalamount: "Row",
      makatiZentotalamount: "Row",
      subtotalnonCount: "Row", 
      subtotalCount: "Row", 
      regularnonCount: "Row",
      regularCount: "Row",
      studentnonCount: "Row",
      studentCount: "Row",
      elderlynonCount: "Row", 
      elderlyCount: "Row", 
  },
  {   id: 3, 
      TransportCompany: "Row", 
      CollectionStatisticsDate: "Row",
      category: "Row",
      totalamount: "Row",
      makatiZentotalamount: "Row",
      subtotalnonCount: "Row", 
      subtotalCount: "Row", 
      regularnonCount: "Row",
      regularCount: "Row",
      studentnonCount: "Row",
      studentCount: "Row",
      elderlynonCount: "Row", 
      elderlyCount: "Row", 
  },
  {   id: 4, 
      TransportCompany: "Row", 
      CollectionStatisticsDate: "Row",
      category: "Row",
      totalamount: "Row",
      makatiZentotalamount: "Row",
      subtotalnonCount: "Row", 
      subtotalCount: "Row", 
      regularnonCount: "Row",
      regularCount: "Row",
      studentnonCount: "Row",
      studentCount: "Row",
      elderlynonCount: "Row", 
      elderlyCount: "Row", 
  },
];

// TerminalRevision data
export const termiData = [
  {   
    id: 1, 
    Item: "Row", 
    Version: "Row",
    Transmission: "Row",
    Data: "Row",
    Application: "01-07-2024 11:10:16",
  },
  {   
    id: 2, 
    Item: "Row", 
    Version: "Row",
    Transmission: "Row",
    Data: "Row",
    Application: "01-07-2024 11:10:16",
  },
  {   
    id: 3, 
    Item: "Row", 
    Version: "Row",
    Transmission: "Row",
    Data: "Row",
    Application: "01-07-2024 11:10:16",
  },
  {   
    id: 4, 
    Item: "Row", 
    Version: "Row",
    Transmission: "Row",
    Data: "Row",
    Application: "01-07-2024 11:10:16",
  }
];
export const termiColumns = [
  {
    name: 'Item',
    header: 'Item',
  },
  {
    name: 'Version',
    header: 'Version Information',
  },
  {
    name: 'Transmission',
    header: 'Transmission Time',
  },
  {
    name: 'Data',
    header: 'Data Update Time',
  },
  {
    name: 'Application',
    header: 'Application Date and Time',
  },
];

export const termiTrans = {
 height: 36,
};