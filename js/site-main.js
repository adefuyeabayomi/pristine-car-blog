let app = new Vue({
    el : "#app",
    data : {
        ham : "",
        animateClass : "animate__animated animate__slideOutRight",
    },
    computed : {
        guest : function (){
            return window.localStorage.getItem("username") || "Guest User";
        }
    },
    methods : {
        updateHam : function () {
            if(this.ham == ""){
                this.ham = "yt-ham-active";
                this.animateClass = "animate__animated animate__slideInRight";
            }
            else {
                this.ham = "";
                this.animateClass = "animate__animated animate__slideOutRight"
            }
        }
    },
    created : function () {
        setTimeout(()=>{
            document.getElementsByClassName("blog-menu-container")[0].style.opacity = 1;
        }, 2000)
    }
})