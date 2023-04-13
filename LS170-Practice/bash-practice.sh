echo 'Hello World'

string='Hello'

if [[ -n string ]]
then
  echo $string
fi

integer_1=10
integer_2=10

if [[ $integer_1 -eq $integer_2 ]]
then
  echo $integer_1 and $integer_2 are the same
fi

integer=4

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10

  if [[ $integer -lt 5 ]]
  then
    echo $integer is also less than 5
  fi
fi

integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
elif [[ $integer -gt 20 ]]
then
  echo $integer is greater than 20
else
  echo $integer is between 10 and 20
fi

counter=0
max=10

while [[ $counter -le $max ]]
do
  echo $counter
  ((counter++))
done

counter=0
max=10

until [[ $counter -gt $max ]]
do
  echo $counter
  ((counter++))
done

numbers='1 2 3 4 5 6 7 8 9 10'

for number in $numbers
do
  echo $number
done

greeting() {
  echo Hello $1
}

greeting 'Peter'