#!/bin/sh

rm -rf build
npm run build
rm -f build/car.fbx
tar -czvf yellow.tar.gz -C build .
rm -rf build
