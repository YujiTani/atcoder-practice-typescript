#!/bin/bash

# 引数の検証
if [ $# -lt 1 ]; then
  echo "Usage: ./run_sample.sh <path-to-solution-file> [sample-file-path]"
  echo "Example: ./run_sample.sh src/abc/001/a/index.ts"
  exit 1
fi

SOLUTION_FILE=$1
SAMPLE_FILE=${2:-$(dirname $SOLUTION_FILE)/sample.txt}

# ファイルの存在確認
if [ ! -f "$SOLUTION_FILE" ]; then
  echo "Error: Solution file not found: $SOLUTION_FILE"
  exit 1
fi

if [ ! -f "$SAMPLE_FILE" ]; then
  echo "Error: Sample file not found: $SAMPLE_FILE"
  exit 1
fi

echo "Running: $SOLUTION_FILE with sample: $SAMPLE_FILE"
echo "--------------------------"
echo "Sample Input:"
cat "$SAMPLE_FILE"
echo "--------------------------"
echo "Output:"
cat "$SAMPLE_FILE" | npx ts-node -r tsconfig-paths/register "$SOLUTION_FILE"
echo "--------------------------"