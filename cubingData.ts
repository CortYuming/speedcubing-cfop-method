export const CUBING_DATA:string[] = [
  // PLL
  "PLL	Ub	M2' U' M U2 M' U' M2'	(M2' U' M U2' M' U' M2') *2	",
  "PLL	Ua	M2' U M U2 M' U M2'	(M2' U M U2 M' U M2') *2	",
  "PLL	H	M2' U M2' U2 M2' U M2'	M2' U M2' U2 M2' U M2'	",
  "PLL	Ab	x (L U' L) D2 (L' U L) D2 L2 x'	(x (L U' L) D2 (L' U L) D2 L2 x') *2	",
  "PLL	Aa	x L2' D2 (L' U' L) D2 (L' U L') x'	(x L2' D2 (L' U' L) D2 (L' U L') x') *2	",
  "PLL	T	(R U R' U') R' F R2 U' R' U' (R U R') F'	(R U R' U') R' F R2 U' R' U' (R U R') F'	",
  "PLL	Nb	r' D' F (r U' r') F' D (r2 U r' U') (r' F r F')	r' D' F (r U' r') F' D (r2 U r' U') (r' F r F')	",
  "PLL	Na	(R U R') U (R U R') F' (R U R' U') (R' F R2 U' R') (U2 R U' R')	(R U R') U (R U R') F' (R U R' U') (R' F R2 U' R') (U2 R U' R')	",
  "PLL	Z	M U M2' U M2' U M U2 M2' U'	M U M2' U M2' U M U2 M2' U'	",
  "PLL	E	x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x	x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x	",
  "PLL	V	(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R	(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R	",
  "PLL	F	R' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R	R' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R	",
  "PLL	Rb	R2 F R (U R U' R') F' R U2' R' U2' R U	R2 F R (U R U' R') F' R U2' R' U2' R U	",
  "PLL	Ra	(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'	(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'	",
  "PLL	Jb	(R U R') F' (R U R' U') R' F R2 U' R' U'	(R U R') F' (R U R' U') R' F R2 U' R' U'	",
  // "PLL	Ja01	x (R2 F R F') R U2 (r' U r) U2 x'	x (R2 F R F') R U2 (r' U r) U2 x'	",
  "PLL	Ja	(L' U' L) F (L' U' L U) L F' L2' U L U	(L' U' L) F (L' U' L U) L F' L2' U L U	",
  "PLL	Y	F (R U' R' U') (R U R') F' (R U R' U') (R' F R F')	F (R U' R' U') (R U R') F' (R U R' U') (R' F R F')	",
  "PLL	Gd	(R U R') (U' D) R2 U' R U' R' U R' U R2 D'	((R U R') (U' D) R2 U' R U' R' U R' U R2 D)*3	",
  "PLL	Gc	R2 U' R U' R U R' U R2 (D' U) (R U' R') D	(R2 U' R U' R U R' U R2 (D' U) (R U' R') D) *3	",
  "PLL	Gb	(R' U' R) (U D') R2 U R' U R U' R U' R2 D	((R' U' R) (U D') R2 U R' U R U' R U' R2 D) *3	",
  "PLL	Ga	R2 U R' U R' U' R U' R2 (D U') (R' U R) D'	(R2 U R' U R' U' R U' R2 (D U') (R' U R) D) *3	",
  // OLL
  "OLL	Line to ???	F (R U R' U') F'	(F (R U R' U') F') *2	F (R U R' U') F' F (R U R' U') F'",
  "OLL	L-shape to ???	f (R U R' U') f'	(f (R U R' U') f') *2	f (R U R' U') f' f (R U R' U') f'",
  "OLL	Dot to ???	F (R U R' U') F' f (R U R' U') f'	F (R U R' U') F' f (R U R' U') f'	F (R U R' U') F' f (R U R' U') f'",
  "OLL	21	(R U R') U R U' R' U R U2' R'	(R U R') U R U' R' U R U2' R'	",
  "OLL	22	R U2' (R2' U' R2 U' R2') U2' R	R U2' (R2' U' R2 U' R2') U2' R	",
  "OLL	23	R2 D R' U2 R D' R' U2 R'	(R2 D R' U2 R D' R' U2 R') *2	",
  "OLL	24	(r U R' U') (r' F R F')	((r U R' U') (r' F R F')) *2	",
  "OLL	25	(F R' F' r) (U R U' r')	((F R' F' r) (U R U' r')) *2	",
  "OLL	26	R U2' R' U' R U' R'	(R U2' R' U' R U' R') *5	",
  "OLL	27	(R U R') U R U2 R'	((R U R') U R U2 R') *5	",
  // F2L
  // Section 1A
  // White Sticker Faces Up
  "F2L	1A:White Sticker Faces Up01	U2 (R U R') U (R U' R')		",
  "F2L	1A:White Sticker Faces Up02	y U2 (L' U' L) U' (L' U L)		",
  "F2L	1A:White Sticker Faces Up03	U (R U2 R') U (R U' R')		",
  "F2L	1A:White Sticker Faces Up04	y U' (L' U2 L) U' (L' U L)		",
  "F2L	1A:White Sticker Faces Up05-01	U (R U' R') U' (R U' R' U R U' R')		",
  "F2L	1A:White Sticker Faces Up05-02	U (F R' F' R) U (R U R')		",
  "F2L	1A:White Sticker Faces Up06-01	y U' (L' U L) U (L' U L U' L' U L)		",
  "F2L	1A:White Sticker Faces Up06-02	U' R U (R2' F R F') (R U' R')		",
  "F2L	1A:White Sticker Faces Up07	(R U2 R') U' (R U R')		",
  "F2L	1A:White Sticker Faces Up08	y (L' U2 L) U (L' U' L)		",
  // White Sticker Faces Side/Front:Stickers on the U face are different:
  "F2L	1A:White Sticker Faces Side/Front:different:01	(R U R')		",
  "F2L	1A:White Sticker Faces Side/Front:different:02	y (L' U' L) 		",
  "F2L	1A:White Sticker Faces Side/Front:different:03	U' (R U R') U (R U R')		",
  "F2L	1A:White Sticker Faces Side/Front:different:04	y U (L' U' L) U' (L' U' L)		",
  "F2L	1A:White Sticker Faces Side/Front:different:05	R' U2 R2 U R2' U R		",
  "F2L	1A:White Sticker Faces Side/Front:different:06	y L U2 L2' U' L2 U' L'		",
  "F2L	1A:White Sticker Faces Side/Front:different:07	U' (R U' R') U (R U R')		",
  "F2L	1A:White Sticker Faces Side/Front:different:08	y U (L' U L) U' (L' U' L)		",
  // White Sticker Faces Side/Front:Stickers on the U face are the same:
  "F2L	1A:White Sticker Faces Side/Front:same:01	y U' (L' U L)		",
  "F2L	1A:White Sticker Faces Side/Front:same:02	U (R U' R')		",
  "F2L	1A:White Sticker Faces Side/Front:same:03	y U (L' U2 L) U2 (L' U L)		",
  "F2L	1A:White Sticker Faces Side/Front:same:04	U' (R U2 R') U2 (R U' R')		",
  "F2L	1A:White Sticker Faces Side/Front:same:05	U' (R U R') U2 (R U' R')		",
  "F2L	1A:White Sticker Faces Side/Front:same:06	y U (L' U' L) U2 (L' U L)		",
  "F2L	1A:White Sticker Faces Side/Front:same:07	M U (L F' L') U' M'		",
  "F2L	1A:White Sticker Faces Side/Front:same:08	y M U' (R' F R) U M'		",
  // Section 1B
  // 1 piece is in the correct slot.
  // Edge in the slot
  "F2L	1B:Edge in the slot01	U (R U R') U2 (R U R')		",
  "F2L	1B:Edge in the slot02	y U' (L' U' L) U2 (L' U' L)		",
  "F2L	1B:Edge in the slot03	U (F' U' F) U' (R U R')		",
  "F2L	1B:Edge in the slot04	y U' (F U F') U (L' U' L)		",
  "F2L	1B:Edge in the slot05	(U R U' R')		",
  "F2L	1B:Edge in the slot06	U' (R' F R F') (R U' R')		",
  // Corner in the slot
  "F2L	1B:Corner in the slot01	(R U R') U' (R U R')		",
  "F2L	1B:Corner in the slot02	y (L' U' L) U (L' U' L)		",
  "F2L	1B:Corner in the slot03	(R U' R') U (R U' R')		",
  "F2L	1B:Corner in the slot04	y (L' U L) U' (L' U L)		",
  "F2L	1B:Corner in the slot05	U' (R' F R F') (R U R')		",
  "F2L	1B:Corner in the slot06	y U (L F' L' F) (L' U' L)		",
  // Section 1C
  // Both pieces are in the correct slot.
  "F2L	1C:Both pieces are in the correct slot01	(R U' R') U (R U2 R' U R U' R')		",
  "F2L	1C:Both pieces are in the correct slot02	y' (L' U L) U' (L' U2' L U' L' U L)		",
  "F2L	1C:Both pieces are in the correct slot03	(R U' R') (F' L' U2 L F)		",
  "F2L	1C:Both pieces are in the correct slot04	y (L' U L) (F R U2' R' F')		",
  "F2L	1C:Both pieces are in the correct slot05	R2' U2' F R2 F' U2' R' U R'		",
  // Section 2A
  // Edge is in the wrong slot.
  "F2L	2A:White Sticker Faces Up01	U' R' U R2 U' R'		",
  "F2L	2A:White Sticker Faces Up02	y U L U' L2' U L		",
  "F2L	2A:White Sticker Faces Up03	U2 (R' U R) U' (S R S')		",
  "F2L	2A:White Sticker Faces Up04	y U2 (L U' L') U (S' L' S)		",
  "F2L	2A:White Sticker Faces Up05	U2 L2' u L2 u' L2'		",
  "F2L	2A:White Sticker Faces Up06	L F' U F L'		",
  // White Sticker Faces Side/Front
  "F2L	2A:White Sticker Faces Side/Front01	R' U' R2 U R'		",
  "F2L	2A:White Sticker Faces Side/Front02	y L U L2' U' L		",
  "F2L	2A:White Sticker Faces Side/Front03	F D R D' F'		",
  "F2L	2A:White Sticker Faces Side/Front04	y F' D' L' D F		",
  "F2L	2A:White Sticker Faces Side/Front05	U' (L' U' L) (R U' R')		",
  "F2L	2A:White Sticker Faces Side/Front06	U (R U R') (L' U L)		",
  "F2L	2A:White Sticker Faces Side/Front07	(F U2 F') (R U R')		",
  "F2L	2A:White Sticker Faces Side/Front08	y (F' U2 F) (L' U' L)		",
  "F2L	2A:White Sticker Faces Side/Front09	U (R U R') (L U L')		",
  "F2L	2A:White Sticker Faces Side/Front10	y U' (L' U' L) (R' U' R)		",
  "F2L	2A:White Sticker Faces Side/Front11	U2 F' (L U L') F		",
  "F2L	2A:White Sticker Faces Side/Front12	y U2' F (R' U' R) F'		",
  // Section 2B
  // Corner is in the wrong slot.
  "F2L	2B:Corner In The Right Slot01	U (R U' R') (L' U L)		",
  "F2L	2B:Corner In The Right Slot02	y (L' U2 L) U' (L U L')		",
  "F2L	2B:Corner In The Right Slot03	U2 (R U' R') U (L' U' L)		",
  "F2L	2B:Corner In The Right Slot04	y U' L' U' L2 U2 L'		",
  "F2L	2B:Corner In The Right Slot05	(R U R') U' (L' U L)		",
  "F2L	2B:Corner In The Right Slot06	U' (R U R') (F U F')		",
  // Corner In The Left Slot
  "F2L	2B:Corner In The Left Slot01	y U' (L' U L) (R U' R')		",
  "F2L	2B:Corner In The Left Slot02	(R U2 R') U (R' U' R)		",
  "F2L	2B:Corner In The Left Slot03	(F R' F' R) U (R' U2 R)		",
  "F2L	2B:Corner In The Left Slot04	U R U R2' U2 R		",
  "F2L	2B:Corner In The Left Slot05	(S R' S')		",
  "F2L	2B:Corner In The Left Slot06	U (F U' F') (R' U' R)		",
  // Corner In The Opposite Slot
  "F2L	2B:Corner In The Opposite Slot01	U' (F' U F) (L U2 L')		",
  "F2L	2B:Corner In The Opposite Slot02	U (R U' R') U (f' L f)		",
  "F2L	2B:Corner In The Opposite Slot03	(R U' R') (L U2 L')		",
  "F2L	2B:Corner In The Opposite Slot04	(R U R') (f' L f)		",
  "F2L	2B:Corner In The Opposite Slot05	(R U' R') U (L U L')		",
  "F2L	2B:Corner In The Opposite Slot06	(R' F R F') (L U2 L')		",
  // Section 3: Expert F2L
  // Both pieces are in a slot (only the easy cases).
  "F2L	3:Corner Is Solved01	R2 U' R2' U R2		",
  "F2L	3:Corner Is Solved02	f' R' U R f		",
  "F2L	3:Corner Is Solved03	y L2' U L2 U' L2'		",
  "F2L	3:Corner Is Solved04	y f L U' L' f'		",
  "F2L	3:Corner Is Solved05	L2' u' L2 u L2'		",
  "F2L	3:Corner Is Solved06	(L' u' L) U (L' u L)		",
  // Pair In The Wrong Slot
  "F2L	3:Pair In The Wrong Slot01	R' F R2 U' R2' F' R		",
  "F2L	3:Pair In The Wrong Slot02	y L F' L2' U L2 F L'		",
  "F2L	3:Pair In The Wrong Slot03	R (L U2 L') R'		",
  // Flipped Edge & Corner In Adjacent Slot
  "F2L	3:Flipped Edge & Corner In Adjacent Slot01	L F2' L' F U' F		",
  "F2L	3:Flipped Edge & Corner In Adjacent Slot02	y R' F2 R F' U F'		",
  "F2L	3:Flipped Edge & Corner In Adjacent Slot03	(R' F R U' F') (R U' R')		",
  "F2L	3:Flipped Edge & Corner In Adjacent Slot04	y (L F' L' U F) (L' U L)		",
  "F2L	3:Flipped Edge & Corner In Adjacent Slot05	(L' U L) (M' U R U' r') (R U' R')		",
  "F2L	3:Flipped Edge & Corner In Adjacent Slot06	y (R U' R') (M' U' L' U l) (L' U L)		",
  // Other Easy Cases
  "F2L	3:Other Easy Cases01	(R' F R U' F') U (R U' R')		",
  "F2L	3:Other Easy Cases02	y (L F' L' U F) U' (L' U L)		",
  // CROSS
  "CROSS	U to D	F2		",
  "CROSS	U right edge to D	R' F		",
  "CROSS	U left edge to D	L F'		",
  "CROSS	Middle right edge to D	F		",
  "CROSS	Middle left edge to D	F'		",
];
