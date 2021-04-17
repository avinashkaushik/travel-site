import '../styles/styles.css' //lading css file from javascript file because webpack only bundles javascript file and also for speed and performance advantages
                             
if(module.hot){
    module.hot.accept()       // Accepting hot updates(CSS OR JS) if it make sense to update them
}

