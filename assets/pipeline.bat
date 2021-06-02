@REM #!/usr/bin/env bash
@REM @echo off

@REM commentchecker.py > Output
@REM SET /p test=<Output
@REM if %test% == 0 
@REM ECHO "comment not present!"
@REM exit 2
@REM else 
@REM ECHO "comment check passed"

@REM PAUSE
@REM DEL Output

@REM #npm install
@REM npm run build
@REM cd src/_tests_
@REM jest
@REM cd ../../../
@REM git add .
@REM git commit -m $1
@REM git push origin master
@REM git status


@REM SET test = $(python3 StaticCheck.py)

@REM if %test%==0 echo 
@REM     exit 2

@REM else echo 

