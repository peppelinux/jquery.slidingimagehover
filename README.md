# jquery.slidingimagehover



  JS

        <script type="text/javascript">
        
        $(document).ready(function(){
                $(".display-item").slidingImageHover({duration:200});
        });
        
        </script>   
        
        

 HTML
 
 					<div class="icon-clima-1 {{ i.classe }}  display-item" title="{{ i.nome|default_if_none:"" }}">
                        <a href="/area/{{i.url}}" style="color: white; width:100%;">
                        
                            <div class="display-content" >                              
                                  <div style="width: 100%; min-height: 33px; clear: both;" class="tile_content">
                                    <h3 style="float: left; margin-top: 1.6em; margin-left: 1.6em;">TITLE</h3>
                                  </div>                                     
                                  
                                  <div class="image_slider" style="overflow: hidden; width:100%;">
                                    <img src="/statics/images/funny_campus.png"></img>
                                  </div>  
                            
                            </div>
                           
                        </a>
					</div>
