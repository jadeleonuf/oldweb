//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="When was the City of Gainesville officially incorporated?"
choice1[1]="1832"
choice1[2]="1865"
choice1[3]="1869"
choice1[4]="1901"

question[2]="What is the population of Gainesville? (as of 2020)"
choice2[1]="61,719"
choice2[2]="134,945"
choice2[3]="274,927"
choice2[4]="276,228"

question[3]="Who is the current mayor of Gainesville?"
choice3[1]="Pegeen Hanrahan"
choice3[2]="Kent Fuchs"
choice3[3]="Ed Braddy"
choice3[4]="Lauren Poe"

question[4]="In what year did classes first meet at the present UF site?"
choice4[1]="1869"
choice4[2]="1892"
choice4[3]="1906"
choice4[4]="1912"

question[5]="How large is the UF campus?"
choice5[1]="1000+ acres with more than 700 buildings"
choice5[2]="1000+ acres with more than 900 buildings"
choice5[3]="2000+ acres with more than 700 buildings"
choice5[4]="2000+ acres with more than 900 buildings"

question[6]="Where is UF administration located?"
choice6[1]="Tigert"
choice6[2]="Smathers"
choice6[3]="Reitz Union"
choice6[4]="Criser Hall"

question[7]="How many buildings does UF IFAS have?"
choice7[1]="749 of which 348 are on campus and around 17,171 acres of property"
choice7[2]="1,141 of which 348 are on campus and around 17,212 acres of property"
choice7[3]="1,249 of which 348 are on campus and around 27,279 acres of property"
choice7[4]="1,291 of which 348 are on campus and around 17,000 acres of property"

question[8]="Who is the current and 12th President of the University of Florida?"
choice8[1]="Lauren Poe"
choice8[2]="Joseph Glover"
choice8[3]="Kent Fuchs"
choice8[4]="Bernie Machan"

question[9]="Who is the current University of Florida Provost?"
choice9[1]="Ron Anderson"
choice9[2]="David Nelson"
choice9[3]="Kent Fuchs"
choice9[4]="Joseph Glover"


question[10]="Where was the background picture taken?"
choice10[1]="The Swamp"
choice10[2]="Florida Field"
choice10[3]="The Stadium"
choice10[4]="All of the Above"



solution[1]="c"
solution[2]="b"
solution[3]="d"
solution[4]="c"
solution[5]="d"
solution[6]="a"
solution[7]="c"
solution[8]="c"
solution[9]="d"
solution[10]="d"
