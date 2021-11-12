function FitnessHidden(){

    var FitnessNav = document.getElementById("fitness_nav");
    var DeporteNav = document.getElementById("deporte_nav");

    DeporteNav.hidden=true;

    if(FitnessNav.hidden==true){

        FitnessNav.hidden=false;

    }else if(FitnessNav.hidden==false){

        FitnessNav.hidden=true;

    }
    
}

function DeporteHidden(){

    var DeporteNav = document.getElementById("deporte_nav");
    var FitnessNav = document.getElementById("fitness_nav");

    FitnessNav.hidden=true;

    if(DeporteNav.hidden==true){

        DeporteNav.hidden=false;

    }else if(DeporteNav.hidden==false){

        DeporteNav.hidden=true;

    }

}