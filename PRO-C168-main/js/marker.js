AFRAME.registerComponent("marker",{
    init:async function(){
        this.el.addEventListener("markerformed",()=>{
            console.log("markerformed")
            this.markerformed()
        })
        this.el.addEventListener("markerlost",()=>{
            console.log("markerlost")
            this.markerlost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.display="flex"
        var ratingButton = document.getElementById("plus-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click",()=>{
             swal ({
                 icon:"warning", title: "ratedish", text: "work in progress"
             })
        })
        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg", title: "timesfororder", text: "Your order will be served soon at your table"
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv= document.getElementById("button-div");
        buttonDiv.style.display="none"
    }
})