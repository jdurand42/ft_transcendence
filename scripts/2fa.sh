#!/bin/bash
docker exec -ti pong rails runner 'User.find('$1').update(two_factor: true)'
docker exec -ti pong rails runner 'User.find('$1').update(two_factor_code: "0000")'
