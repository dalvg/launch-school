function server () {

while true
  do
    read messsage
    echo "you said $message"
done

}

coproc SERVER_PROCESS { server; }

nc -lvk 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}