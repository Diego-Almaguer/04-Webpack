const HtmlWebPackPlugin=require('html-webpack-plugin');



module.exports={

    mode:'development',
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                    
                        loader:'html-loader',
                        Options:{
                            attributes: false
                        },
                    
                    }
                
                
                ]
            
            
            }
        
        
        ]
    
    },
    Plugins:[
        new  HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:"./index.html"
        }),
    ]


}