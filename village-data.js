window.VILLAGE_DATA = {
  road:{material:'asphalt',color1:'#4f5563',color2:'#2f3540'},
  pond:{visible:true,fishCount:6,fishSpeed:1.0},
  cat:{x:-2.2,z:3.9,targetX:-1.2,targetZ:1.4,speed:0.78,mode:'idle',timer:1.5},
  cat2:{x:0,z:0,targetX:0,targetZ:0,speed:0.92,mode:'sleep',timer:999999,targetY:1.58,sleepCounter:0,sleepPose:'loaf',catchWindow:0,escapeCooldown:0,visible:true,lastSeenAt:0},
  avatar:{x:0.2,z:3.45,carry:'none',carryCatKey:null},
  profile:{
    name:'Ryul-Hee Kim',birthYear:'',birthplace:'Gwangju, Republic of Korea',gender:'',
    role:'Master's student in biomedical science',
    intro:'Hi, I am Ryul-Hee Kim. I study biomedical science with an interest in ECMO, bioelectrical impedance analysis, sepsis models, data visualization, and scientific presentation.',
    musicGenre:'',favoriteArtist:''
  },
  buildings:[
    {id:'lab',type:'lab',name:'Research Lab',icon:'🧪',desc:'A space for research projects, papers, experiments, and presentation materials.',x:-3.6,z:-1.9,scale:1.05,rot:0,locked:false},
    {id:'school',type:'school',name:'Medical School',icon:'🎓',desc:'A space for education, academic background, and laboratory experience.',x:3.6,z:-1.8,scale:1.08,rot:0,locked:false},
    {id:'gallery',type:'gallery',name:'Gallery',icon:'🖼️',desc:'A space for posters, figures, slides, and visual materials.',x:-4.9,z:2.9,scale:0.95,rot:0,locked:false},
    {id:'house',type:'house',name:'About House',icon:'🏡',desc:'A space for a short bio, interests, hobbies, and profile information.',x:0.0,z:5.15,scale:0.98,rot:0,locked:false},
    {id:'post',type:'post',name:'Contact Post',icon:'✉️',desc:'A space for email, GitHub, Google Scholar, ORCID, and other links.',x:4.9,z:2.9,scale:0.90,rot:0,locked:false}
  ],
  rooms:{
    lab:{heading:'Research / Projects',text:'This room organizes ongoing research, experimental designs, papers, and presentation materials. Project folders, slides, spreadsheets, and code files can be linked here.',tags:['ECMO','BIA','Sepsis','Python','Presentation'],attachments:[]},
    school:{heading:'Education / Academic History',text:'This room summarizes education, major, laboratory affiliation, and degree-course information.',tags:['Master course','Biomedical Science','Medical School'],attachments:[]},
    gallery:{heading:'Posters / Figures / Slides',text:'This room displays conference posters, presentation slides, figures, and image-based materials.',tags:['Poster','Figure','Presentation'],attachments:[]},
    house:{heading:'About Me',text:'This room contains a short self-introduction, interests, hobbies, and profile information.',tags:['About','Interests','Profile'],attachments:[]},
    post:{heading:'Contact / Links',text:'This room collects email, GitHub, Google Scholar, ORCID, LinkedIn, and other external links.',tags:['Email','GitHub','Scholar','ORCID'],attachments:[]}
  },
  trees:[
    {id:'t1',type:'round',x:-4.95,z:-1.75,scale:.95,rot:0,locked:false},{id:'t2',type:'round',x:-2.55,z:-2.35,scale:.92,rot:0,locked:false},{id:'t3',type:'fruit',x:2.35,z:-2.30,scale:.92,rot:0,locked:false},{id:'t4',type:'round',x:4.85,z:-1.65,scale:.95,rot:0,locked:false},
    {id:'t5',type:'fruit',x:-5.65,z:2.85,scale:.9,rot:0,locked:false},{id:'t6',type:'pine',x:-3.80,z:3.55,scale:.92,rot:0,locked:false},{id:'t7',type:'round',x:2.95,z:3.50,scale:.88,rot:0,locked:false},{id:'t8',type:'round',x:5.65,z:2.80,scale:.9,rot:0,locked:false}
  ],
  lamps:[
    {id:'l1',x:-3.05,z:.78,scale:1,rot:0,locked:false},{id:'l2',x:3.05,z:.78,scale:1,rot:0,locked:false},{id:'l3',x:-1.95,z:-2.05,scale:1,rot:0,locked:false},{id:'l4',x:1.95,z:-2.05,scale:1,rot:0,locked:false},{id:'l5',x:-4.35,z:2.15,scale:1,rot:0,locked:false},{id:'l6',x:4.35,z:2.15,scale:1,rot:0,locked:false}
  ]
};
