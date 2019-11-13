# PTG

_primeiro_projeto_PTG_

Projeto desenvolvido por Luiz C. Borba, Where is my Pet.

- Html + Js + Css. (trabalhando em um servidor Node.)

  Algoritmo "DISTANCIA PET"

Const
dist_max = 20
converter_coord_metros = 111111.11


Var
x1, x2, y1, y2, d1, d2


Inicio

escreval("* DISTÂNCIA DO PET *")                             

input("Digite a LATITUDE do Tutor:")  
leia (x1)                                
                           
input("Digite a LONGITUDE do Tutor:") 
leia (y1)                               
                           
input("Digite a LATITUDE do PET:")   
leia (x2)                               
                         
input("Digite a LONGITUDE do PET:")   
leia (y2)                               
                           
d1 = raizq(((x2-x1)^2)+((y2-y1)^2))       
d2 = d1*converter_coord_metros             

if d2>dist_max                    
 window.alert(" Atenção!  Seu Pet está distante à ", d2," metros")
