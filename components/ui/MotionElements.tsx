// components/ui/MotionElements.tsx
'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export const MotionH2 = (props: HTMLMotionProps<'h2'>) => (
    <motion.h2 {...props} />
);
