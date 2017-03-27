var config = {
    baseurl:'data',
    exps:[
        {
            type:'ABX',
            path:'ABX',
            info:"哪个更像重读句？",
            styles:['Emphasis','Neutral'],
            files:['Test_1.wav','Test_3.wav','Test_6.wav','Test_15.wav','Test_17.wav'],
        },
        {
            type:'MOS',
            path:'MOS',
            info:"",
            styles:['Natural','Neutral','Emphasis'],
            files:['Test_21.wav','Test_27.wav','Test_42.wav','Test_43.wav','Test_44.wav','Test_57.wav','Test_66.wav','Test_77.wav','Test_83.wav','Test_90.wav'],
        },
        {
            type:'CM',
            path:'CM',
            info:"",
            styles:['Emphasis','Neutral','Question'],
            files:['Emphasis/Test_21.wav','Emphasis/Test_22.wav','Emphasis/Test_27.wav','Emphasis/Test_31.wav','Question/Test_qst_10.wav',
                   'Neutral/Test_181.wav','Neutral/Test_187.wav',
                   'Question/Test_qst_1.wav','Question/Test_qst_6.wav'],
        }
    ],
};