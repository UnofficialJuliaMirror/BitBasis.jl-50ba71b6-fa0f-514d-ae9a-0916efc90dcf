var documenterSearchIndex = {"docs":
[{"location":"#","page":"Home","title":"Home","text":"DocTestSetup = quote\n    using BitBasis, Dates\nend","category":"page"},{"location":"#BitBasis-1","page":"Home","title":"BitBasis","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Types and operations for basis represented by bits in linear algebra.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Markdown, Dates\nMarkdown.parse(\"*Documentation built* **$(Dates.now())** *with Julia* **$(VERSION)**\")","category":"page"},{"location":"#Introduction-1","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The basis of linear spaces can be marked by a set of symbols, for concrete physical systems, this can be binary spins, bits, qubits, etc. They can be in general represented as binary basis, e.g 00101, 10101....","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This package provides tools for manipulating such basis in an elegant efficient way in Julia.","category":"page"},{"location":"#Contents-1","page":"Home","title":"Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\n    \"tutorial.md\",\n    \"man.md\",\n]","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"CurrentModule = BitBasis","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"using BitBasis","category":"page"},{"location":"tutorial/#Conventions-1","page":"Tutorial","title":"Conventions","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"We use σ to represent a binary digit, its subtitle usually refers to the position of a given binary digit inside a number (bit string).","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"In computing, bit numbering (or sometimes bit endianness) is the convention used to identify the bit positions in a binary number or a container of such a value. The bit number starts with zero and is incremented by one for each subsequent bit position. See also Bit numbering((Bit endianness)).","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"There are two different representation orders of a bit string:","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Least significant bit 0 bit  numbering\nMost significant bit 0 bit numbering","category":"page"},{"location":"tutorial/#array_order-1","page":"Tutorial","title":"LSB 0 bit numbering","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"This follows the order of BitArray or other array representation of bits, e.g","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"For number 0b011101 (29)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"sigma_1=1 sigma_2=0 sigma_3=1 sigma_4=1 sigma_5=1 sigma_6=0","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"See also LSB 0 bit numbering","category":"page"},{"location":"tutorial/#literal_order-1","page":"Tutorial","title":"MSB 0 bit numbering","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"This follows the order of binary literal 0bxxxx, e.g","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"For number 0b011101 (29)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"sigma_1=0 sigma_2=1 sigma_3=1 sigma_4=1 sigma_5=0 sigma_6=1","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"See also MSB 0 bit numbering.","category":"page"},{"location":"tutorial/#Integer-Representations-1","page":"Tutorial","title":"Integer Representations","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"We use an Int type to store bit-wise (spin) configurations, e.g. 0b011101 (29) represents the configuration","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"sigma_1=1 sigma_2=0 sigma_3=1 sigma_4=1 sigma_5=1 sigma_6=0","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"so we annotate the configurations vec σ with integer b by b = sumlimits_i 2^i-1σ_i. (Image: 11100) e.g. we can use a number 28 to represent bit configuration 0b11100","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bdistance(0b11100, 0b10101) == 2  # Hamming distance\nbit_length(0b11100) == 5","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"In BitBasis, we also provide a more readable way to define these kind of objects, which is called the bit string literal, most of the integer operations and BitBasis functions are overloaded for the bit string literal.","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"We can switch between binary and digital representations with","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bitarray(integers, nbits), transform integers to bistrings of type BitArray.\npackabits(bitstring), transform bitstrings to integers.\nbaddrs(integer), get the locations of nonzero qubits.","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bitarray(4, 5)\nbitarray([4, 5, 6], 5)\npackbits([1, 1, 0])\nbitarray([4, 5, 6], 5) |> packbits;","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"A curried version of the above function is also provided. See also bitarray.","category":"page"},{"location":"tutorial/#bit_literal-1","page":"Tutorial","title":"Bit String Literal","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bit strings are literals for bits, it provides better view on binary basis. you could use @bit_str, which looks like the following","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bit\"101\" * 2\nbcat(bit\"101\" for i in 1:10)\nrepeat(bit\"101\", 2)\nbit\"1101\"[2]","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"to define a bit string with length. bit\"10101\" is equivalent to 0b10101 on both performance and functionality but it store the length of given bits statically. The bit string literal offers a more readable syntax for these kind of objects.","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Besides bit literal, you can convert a string or an integer to bit literal by bit, e.g","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bit(0b00101; len=5)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Or use the least number of digits required","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bit(0b00101)","category":"page"},{"location":"tutorial/#Bit-Manipulations-1","page":"Tutorial","title":"Bit Manipulations","text":"","category":"section"},{"location":"tutorial/#[readbit](@ref)-and-[baddrs](@ref)-1","page":"Tutorial","title":"readbit and baddrs","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: 11100)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"readbit(0b11100, 2, 3) == 0b10  # read the 2nd and 3rd bits as `x₃x₂`\nbaddrs(0b11100) == [3,4,5]  # locations of one bits","category":"page"},{"location":"tutorial/#[bmask](@ref)-1","page":"Tutorial","title":"bmask","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Masking technic provides faster binary operations, to generate a mask with specific position masked, e.g. we want to mask qubits 1, 3, 4","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"mask = bmask(UInt8, 1,3,4)\nbit(mask; len=4)","category":"page"},{"location":"tutorial/#[allone](@ref)-and-[anyone](@ref)-1","page":"Tutorial","title":"allone and anyone","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"with this mask (masked positions are colored light blue), we have (Image: 1011_1101)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"allone(0b1011, mask) == false # true if all masked positions are 1\nanyone(0b1011, mask) == true # true if any masked positions is 1","category":"page"},{"location":"tutorial/#[ismatch](@ref)-1","page":"Tutorial","title":"ismatch","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: ismatch)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"ismatch(0b1011, mask, 0b1001) == true  # true if masked part matches `0b1001`","category":"page"},{"location":"tutorial/#[flip](@ref)-1","page":"Tutorial","title":"flip","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: 1011_1101)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bit(flip(0b1011, mask); len=4)  # flip masked positions","category":"page"},{"location":"tutorial/#[setbit](@ref)-1","page":"Tutorial","title":"setbit","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: setbit)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"setbit(0b1011, 0b1100) == 0b1111 # set masked positions 1","category":"page"},{"location":"tutorial/#[swapbits](@ref)-1","page":"Tutorial","title":"swapbits","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: swapbits)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"swapbits(0b1011, 0b1100) == 0b0111  # swap masked positions","category":"page"},{"location":"tutorial/#[neg](@ref)-1","page":"Tutorial","title":"neg","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"neg(0b1011, 2) == 0b1000","category":"page"},{"location":"tutorial/#[btruncate](@ref)-and-[breflect](@ref)-1","page":"Tutorial","title":"btruncate and breflect","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: btruncate)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"btruncate(0b1011, 2) == 0b0011  # only the first two qubits are retained","category":"page"},{"location":"tutorial/#[breflect](@ref)-1","page":"Tutorial","title":"breflect","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: breflect)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"breflect(4, 0b1011) == 0b1101  # reflect little end and big end","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"For more detailed bitwise operations, see manual page BitBasis.","category":"page"},{"location":"tutorial/#Number-Readouts-1","page":"Tutorial","title":"Number Readouts","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"In phase estimation and HHL algorithms, one need to read out qubits as integer or float point numbers. A register can be read out in different ways, like","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bint, the integer itself\nbint_r, the integer with bits small-big end reflected.\nbfloat, the float point number 0σ₁σ₂ cdots σ_n.\nbfloat_r, the float point number 0σ_n cdots σ₂σ₁.","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"(Image: 010101)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"bint(0b010101)\nbint_r(0b010101, nbits=6)\nbfloat(0b010101)\nbfloat_r(0b010101, nbits=6);","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Notice the functions with _r as postfix always require nbits as an additional input parameter to help reading, which is regarded as less natural way of expressing numbers.","category":"page"},{"location":"tutorial/#Iterating-over-Bases-1","page":"Tutorial","title":"Iterating over Bases","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Counting from 0 is very natural way of iterating quantum registers, very pity for Julia","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"itr = basis(4)\ncollect(itr)","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"itercontrol is a complicated API, but it plays an fundamental role in high performance quantum simulation of Yao. It is used for iterating over basis in controlled way, its interface looks like","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"for each in itercontrol(7, [1, 3, 4, 7], (1, 0, 1, 0))\n    println(string(each, base=2, pad=7))\nend","category":"page"},{"location":"tutorial/#Reordering-Basis-1","page":"Tutorial","title":"Reordering Basis","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"We store the wave function as vb+1 = langle bpsirangle. We are able to reorder the basis as","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"v = onehot(5, 0b11100)  # the one hot vector representation of given bits\nreorder(v, (3,2,1,5,4)) ≈ onehot(5, 0b11001)\ninvorder(v) ≈ onehot(5, 0b00111)  # breflect for each basis","category":"page"},{"location":"man/#","page":"Manual","title":"Manual","text":"CurrentModule = BitBasis\nDocTestSetup = quote\n    using BitBasis\nend","category":"page"},{"location":"man/#Manual-1","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"man/#","page":"Manual","title":"Manual","text":"Modules = [BitBasis]\nOrder   = [:module, :constant, :type, :macro, :function]","category":"page"},{"location":"man/#BitBasis.BitStr","page":"Manual","title":"BitBasis.BitStr","text":"BitStr{T}\n\nString literal for bits.\n\nBitStr(value[, len=ndigits(value)])\n\nReturns a BitStr, by default the length is set to the minimum length required to represent value as bits.\n\nBitStr(str::String)\n\nParse the input string to a BitStr. See @bit_str for more details.\n\nExample\n\nBitStr supports some basic arithmetic operations. It acts like an integer, but supports some frequently used methods for binary basis.\n\njulia> bit\"101\" * 2\n1010 (10)\n\njulia> bcat(bit\"101\" for i in 1:10)\n101101101101101101101101101101 (766958445)\n\njulia> repeat(bit\"101\", 2)\n101101 (45)\n\njulia> bit\"1101\"[2]\n0\n\n\n\n\n\n","category":"type"},{"location":"man/#BitBasis.IterControl","page":"Manual","title":"BitBasis.IterControl","text":"IterControl{N, S, T}\n\nIterator to iterate through controlled subspace. See also itercontrol. N is the size of whole hilbert space, S is the number of shifts.\n\n\n\n\n\n","category":"type"},{"location":"man/#BitBasis.ReorderedBasis","page":"Manual","title":"BitBasis.ReorderedBasis","text":"ReorderedBasis{N, T}\n\nLazy reorderd basis.\n\n\n\n\n\n","category":"type"},{"location":"man/#BitBasis.ReorderedBasis-Union{Tuple{Tuple{Vararg{T,N}}}, Tuple{T}, Tuple{N}} where T<:Integer where N","page":"Manual","title":"BitBasis.ReorderedBasis","text":"ReorderedBasis(orders::NTuple{N, <:Integer})\n\nReturns a lazy set of reordered basis.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.@bit_str-Tuple{Any}","page":"Manual","title":"BitBasis.@bit_str","text":"@bit_str -> BitStr\n\nConstruct a bit string. such as bit\"0000\". The bit strings also supports string bcat. Just use it like normal strings.\n\nExample\n\njulia> bit\"10001\"\n10001 (17)\n\njulia> bit\"100_111_101\"\n100111101 (317)\n\njulia> bcat(bit\"1001\", bit\"11\", bit\"1110\")\n1001111110 (638)\n\njulia> v = collect(1:16);\n\njulia> v[bit\"1001\"]\n10\n\njulia> onehot(bit\"1001\")\n16-element Array{Float64,1}:\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 1.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n\n\n\n\n\n\n","category":"macro"},{"location":"man/#BitBasis.allone-Union{Tuple{T}, Tuple{BitStr{T,N} where N,Integer}} where T","page":"Manual","title":"BitBasis.allone","text":"allone(b::BitStr, mask::Integer) -> Bool\n\nReturn true if all masked position of index is 1.\n\nExample\n\ntrue if all masked positions are 1.\n\njulia> allone(bit\"1011\", 0b1011)\ntrue\n\njulia> allone(bit\"1011\", 0b1001)\ntrue\n\njulia> allone(bit\"1011\", 0b0100)\nfalse\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.allone-Union{Tuple{T}, Tuple{T,T}} where T<:Integer","page":"Manual","title":"BitBasis.allone","text":"allone(index::Integer, mask::Integer) -> Bool\n\nReturn true if all masked position of index is 1.\n\nExample\n\ntrue if all masked positions are 1.\n\njulia> allone(0b1011, 0b1011)\ntrue\n\njulia> allone(0b1011, 0b1001)\ntrue\n\njulia> allone(0b1011, 0b0100)\nfalse\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.anyone-Union{Tuple{T}, Tuple{BitStr{T,N} where N,Integer}} where T","page":"Manual","title":"BitBasis.anyone","text":"anyone(b::BitStr, mask::Integer) -> Bool\n\nReturn true if any masked position of index is 1.\n\nExample\n\ntrue if any masked positions is 1.\n\njulia> anyone(bit\"1011\", 0b1001)\ntrue\n\njulia> anyone(bit\"1011\", 0b1100)\ntrue\n\njulia> anyone(bit\"1011\", 0b0100)\nfalse\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.anyone-Union{Tuple{T}, Tuple{T,T}} where T<:Integer","page":"Manual","title":"BitBasis.anyone","text":"anyone(index::Integer, mask::Integer) -> Bool\n\nReturn true if any masked position of index is 1.\n\nExample\n\ntrue if any masked positions is 1.\n\njulia> anyone(0b1011, 0b1001)\ntrue\n\njulia> anyone(0b1011, 0b1100)\ntrue\n\njulia> anyone(0b1011, 0b0100)\nfalse\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.baddrs-Tuple{BitStr}","page":"Manual","title":"BitBasis.baddrs","text":"baddrs(b::Integer) -> Vector\n\nget the locations of nonzeros bits, i.e. the inverse operation of bmask.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.baddrs-Tuple{Integer}","page":"Manual","title":"BitBasis.baddrs","text":"baddrs(b::Integer) -> Vector\n\nget the locations of nonzeros bits, i.e. the inverse operation of bmask.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.basis-Tuple{Union{Int64, AbstractArray}}","page":"Manual","title":"BitBasis.basis","text":"basis([IntType], nbits::Int) -> UnitRange{IntType}\nbasis([IntType], state::AbstractArray) -> UnitRange{IntType}\n\nReturns the UnitRange for basis in Hilbert Space of nbits qubits. If an array is supplied, it will return a basis having the same size with the first diemension of array.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bdistance-Union{Tuple{Ti}, Tuple{Ti,Ti}} where Ti<:Integer","page":"Manual","title":"BitBasis.bdistance","text":"bdistance(i::Integer, j::Integer) -> Int\n\nReturn number of different bits.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bfloat-Tuple{BitStr}","page":"Manual","title":"BitBasis.bfloat","text":"bfloat(b::BitStr) -> Float64\n\nfloat view, with MSB 0 bit numbering. See also wiki: bit numbering\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bfloat-Tuple{Integer}","page":"Manual","title":"BitBasis.bfloat","text":"bfloat(b::Integer; nbits::Int=bit_length(b)) -> Float64\n\nfloat view, with MSB 0 bit numbering. See also wiki: bit numbering\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bfloat_r-Tuple{BitStr}","page":"Manual","title":"BitBasis.bfloat_r","text":"bfloat_r(b::Integer; nbits::Int) -> Float64\n\nfloat view, with bits read in inverse order.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bfloat_r-Tuple{Integer}","page":"Manual","title":"BitBasis.bfloat_r","text":"bfloat_r(b::Integer; nbits::Int) -> Float64\n\nfloat view, with bits read in inverse order.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bint-Tuple{BitStr}","page":"Manual","title":"BitBasis.bint","text":"bint(b; nbits=nothing) -> Int\n\ninteger view, with LSB 0 bit numbering. See also wiki: bit numbering\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bint-Tuple{Integer}","page":"Manual","title":"BitBasis.bint","text":"bint(b; nbits=nothing) -> Int\n\ninteger view, with LSB 0 bit numbering. See also wiki: bit numbering\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bint_r-Tuple{BitStr}","page":"Manual","title":"BitBasis.bint_r","text":"bint_r(b; nbits::Int) -> Integer\n\ninteger read in inverse order.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bint_r-Tuple{Integer}","page":"Manual","title":"BitBasis.bint_r","text":"bint_r(b; nbits::Int) -> Integer\n\ninteger read in inverse order.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bit-Tuple{Integer}","page":"Manual","title":"BitBasis.bit","text":"bit(x[; len=ndigits(x, base=2)])\n\nCreate a BitStr accroding to integer x to given length len.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bit-Tuple{String}","page":"Manual","title":"BitBasis.bit","text":"bit(string)\n\nCreate a BitStr with given string of bits. See also @bit_str.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bit-Tuple{}","page":"Manual","title":"BitBasis.bit","text":"bit(;len)\n\nLazy curried version of bit.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bit_length-Tuple{Integer}","page":"Manual","title":"BitBasis.bit_length","text":"bit_length(x::Integer) -> Int\n\nReturn the number of bits required to represent input integer x.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bit_literal-Tuple","page":"Manual","title":"BitBasis.bit_literal","text":"bit_literal(xs...)\n\nCreate a BitStr by input bits xs.\n\nExample\n\njulia> bit_literal(1, 0, 1, 0, 1, 1)\n110101 (53)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bitarray-Union{Tuple{T}, Tuple{Array{T,1},Int64}} where T<:Number","page":"Manual","title":"BitBasis.bitarray","text":"bitarray(v::Vector, [nbits::Int]) -> BitArray\nbitarray(v::Int, nbits::Int) -> BitArray\nbitarray(nbits::Int) -> Function\n\nConstruct BitArray from an integer vector, if nbits not supplied, it is 64. If an integer is supplied, it returns a function mapping a Vector/Int to bitarray.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bmask","page":"Manual","title":"BitBasis.bmask","text":"bmask(::Type{T}) where T <: Integer -> zero(T)\nbmask([T::Type], positions::Int...) -> T\nbmask([T::Type], range::UnitRange{Int}) -> T\n\nReturn an integer mask of type T where 1 is the position masked according to positions or range. Directly use T will return an empty mask 0.\n\n\n\n\n\n","category":"function"},{"location":"man/#BitBasis.breflect","page":"Manual","title":"BitBasis.breflect","text":"breflect(nbits::Int, b::Integer[, masks::Vector{Integer}]) -> Integer\n\nReturn left-right reflected integer.\n\nExample\n\nReflect the order of bits.\n\njulia> breflect(4, 0b1011) == 0b1101\ntrue\n\n\n\n\n\n","category":"function"},{"location":"man/#BitBasis.breflect-Tuple{BitStr}","page":"Manual","title":"BitBasis.breflect","text":"breflect(bit_str[, masks])\n\nReturn left-right reflected bit string.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.bsizeof-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"Manual","title":"BitBasis.bsizeof","text":"bsizeof(::Type)\n\nReturns the size of given type in number of binary digits.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.btruncate-Tuple{Integer,Any}","page":"Manual","title":"BitBasis.btruncate","text":"truncate(b, n)\n\nTruncate bits b to given length n.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.controldo-Union{Tuple{S}, Tuple{N}, Tuple{Union{Function, Type},IterControl{N,S,T} where T}} where S where N","page":"Manual","title":"BitBasis.controldo","text":"controldo(f, itr::IterControl)\n\nExecute f while iterating itr.\n\nnote: Note\nthis is faster but equivalent than using itr as an iterator. See also itercontrol.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.controller-Tuple{Union{UnitRange{Int64}, Int64, Array{Int64,1}, Tuple{Vararg{Int64,#s14}} where #s14},Union{UnitRange{Int64}, Int64, Array{Int64,1}, Tuple{Vararg{Int64,#s14}} where #s14}}","page":"Manual","title":"BitBasis.controller","text":"controller(cbits, cvals) -> Function\n\nReturn a function that checks whether a basis at cbits takes specific value cvals.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.flip-Union{Tuple{T}, Tuple{BitStr{T,N} where N,Integer}} where T","page":"Manual","title":"BitBasis.flip","text":"flip(bit_str, mask::Integer) -> Integer\n\nReturn an BitStr with bits at masked position flipped.\n\nExample\n\njulia> flip(bit\"1011\", 0b1011)\n0000 (0)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.flip-Union{Tuple{T}, Tuple{T,T}} where T<:Integer","page":"Manual","title":"BitBasis.flip","text":"flip(index::Integer, mask::Integer) -> Integer\n\nReturn an Integer with bits at masked position flipped.\n\nExample\n\njulia> flip(0b1011, 0b1011) |> bit(len=4)\n0000 (0)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.group_shift!-Union{Tuple{N}, Tuple{Int64,AbstractArray{Int64,1}}} where N","page":"Manual","title":"BitBasis.group_shift!","text":"group_shift!(nbits, positions)\n\nShift bits on positions together.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.hypercubic-Tuple{Array}","page":"Manual","title":"BitBasis.hypercubic","text":"hypercubic(A::Array) -> Array\n\nget the hypercubic representation for an array.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.invorder-Tuple{Union{AbstractArray{T,1}, AbstractArray{T,2}} where T}","page":"Manual","title":"BitBasis.invorder","text":"invorder(X::AbstractVecOrMat)\n\nInverse the order of given vector/matrix X.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.ismatch-Union{Tuple{T}, Tuple{BitStr{T,N} where N,Integer,Integer}} where T","page":"Manual","title":"BitBasis.ismatch","text":"ismatch(index::Integer, mask::Integer, target::Integer) -> Bool\n\nReturn true if bits at positions masked by mask equal to 1 are equal to target.\n\nExample\n\njulia> n = 0b11001; mask = 0b10100; target = 0b10000;\n\njulia> ismatch(n, mask, target)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.ismatch-Union{Tuple{T}, Tuple{T,T,T}} where T<:Integer","page":"Manual","title":"BitBasis.ismatch","text":"ismatch(index::Integer, mask::Integer, target::Integer) -> Bool\n\nReturn true if bits at positions masked by mask equal to 1 are equal to target.\n\nExample\n\njulia> n = 0b11001; mask = 0b10100; target = 0b10000;\n\njulia> ismatch(n, mask, target)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.itercontrol-Tuple{Int64,AbstractArray{T,1} where T,Any}","page":"Manual","title":"BitBasis.itercontrol","text":"itercontrol([T=Int], nbits, positions, bit_configs)\n\nReturns an iterator which iterate through controlled subspace of bits.\n\nExample\n\nTo iterate through all the bits satisfy 0xx10x1 where x means an arbitrary bit.\n\njulia> for each in itercontrol(7, [1, 3, 4, 7], (1, 0, 1, 0))\n           println(string(each, base=2, pad=7))\n       end\n0001001\n0001011\n0011001\n0011011\n0101001\n0101011\n0111001\n0111011\n\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.log2dim1-Tuple{Any}","page":"Manual","title":"BitBasis.log2dim1","text":"log2dim1(X)\n\nReturns the log2 of the first dimension's size.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.log2i","page":"Manual","title":"BitBasis.log2i","text":"log2i(x::Integer) -> Integer\n\nReturn log2(x), this integer version of log2 is fast but only valid for number equal to 2^n.\n\n\n\n\n\n","category":"function"},{"location":"man/#BitBasis.neg-Tuple{BitStr}","page":"Manual","title":"BitBasis.neg","text":"neg(bit_str) -> Integer\n\nReturn an BitStr with all bits flipped.\n\nExample\n\njulia> neg(bit\"1111\", 4)\n0000 (0)\n\njulia> neg(bit\"0111\", 4)\n1000 (8)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.neg-Union{Tuple{T}, Tuple{T,Int64}} where T<:Integer","page":"Manual","title":"BitBasis.neg","text":"neg(index::Integer, nbits::Int) -> Integer\n\nReturn an integer with all bits flipped (with total number of bit nbits).\n\nExample\n\njulia> neg(0b1111, 4) |> bit(len=4)\n0000 (0)\n\njulia> neg(0b0111, 4) |> bit(len=4)\n1000 (8)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.onehot-Union{Tuple{T}, Tuple{Type{T},BitStr}} where T","page":"Manual","title":"BitBasis.onehot","text":"onehot([T=Float64], bit_str)\n\nReturns an onehot vector of type Vector{T}, where the bit_str-th element is one.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.onehot-Union{Tuple{T}, Tuple{Type{T},Int64,Integer}} where T","page":"Manual","title":"BitBasis.onehot","text":"onehot([T=Float64], nbits, x::Integer)\n\nReturns an onehot vector of type Vector{T}, where index x + 1 is one.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.packbits-Tuple{AbstractArray{T,1} where T}","page":"Manual","title":"BitBasis.packbits","text":"packbits(arr::AbstractArray) -> AbstractArray\n\npack bits to integers, usually take a BitArray as input.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.readbit-Union{Tuple{T}, Tuple{T,Int64}} where T<:Integer","page":"Manual","title":"BitBasis.readbit","text":"readbit(x, loc...)\n\nRead the bit config at given location.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.reorder","page":"Manual","title":"BitBasis.reorder","text":"reorder(X::AbstractArray, orders)\n\nReorder X according to orders.\n\ntip: Tip\nAlthough orders can be any iterable, Tuple is preferred inorder to gain as much performance as possible. But the conversion won't take much anyway.\n\n\n\n\n\n","category":"function"},{"location":"man/#BitBasis.setbit-Union{Tuple{T}, Tuple{BitStr{T,N} where N,Integer}} where T","page":"Manual","title":"BitBasis.setbit","text":"setbit(b::BitStr, mask::Integer) -> Integer\n\nset the bit at masked position to 1.\n\nExample\n\njulia> setbit(bit\"1011\", 0b1100)\n1111 (15)\n\njulia> setbit(bit\"1011\", 0b0100)\n1111 (15)\n\njulia> setbit(bit\"1011\", 0b0000)\n1011 (11)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.setbit-Union{Tuple{T}, Tuple{T,T}} where T<:Integer","page":"Manual","title":"BitBasis.setbit","text":"setbit(index::Integer, mask::Integer) -> Integer\n\nset the bit at masked position to 1.\n\nExample\n\njulia> setbit(0b1011, 0b1100) |> bit(len=4)\n1111 (15)\n\njulia> setbit(0b1011, 0b0100) |> bit(len=4)\n1111 (15)\n\njulia> setbit(0b1011, 0b0000) |> bit(len=4)\n1011 (11)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.swapbits-Tuple{BitStr,Int64,Int64}","page":"Manual","title":"BitBasis.swapbits","text":"swapbits(n::BitStr, mask_ij::Integer) -> BitStr\nswapbits(n::BitStr, i::Int, j::Int) -> BitStr\n\nReturn a BitStr with bits at i and j flipped.\n\nExample\n\njulia> swapbits(0b1011, 0b1100) == 0b0111\ntrue\n\nwarning: Warning\nmask_ij should only contain two 1, swapbits will not check it, use at your own risk.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.swapbits-Union{Tuple{T}, Tuple{T,Int64,Int64}} where T<:Integer","page":"Manual","title":"BitBasis.swapbits","text":"swapbits(n::Integer, mask_ij::Integer) -> Integer\nswapbits(n::Integer, i::Int, j::Int) -> Integer\n\nReturn an integer with bits at i and j flipped.\n\nExample\n\njulia> swapbits(0b1011, 0b1100) == 0b0111\ntrue\n\ntip: Tip\nlocations i and j specified by mask could be faster when bmask is not straight forward but known by constant.\n\nwarning: Warning\nmask_ij should only contain two 1, swapbits will not check it, use at your own risk.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.to_location-Tuple{Any}","page":"Manual","title":"BitBasis.to_location","text":"to_location(x)\n\nConvert bit configuration x to an index.\n\nExample\n\njulia> to_location(1)\n2\n\njulia> to_location(bit\"111\")\n111 (7)\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.next_reordered_basis-Union{Tuple{T}, Tuple{N}, Tuple{T,Tuple{Vararg{T,N}},Tuple{Vararg{T,N}}}} where T where N","page":"Manual","title":"BitBasis.next_reordered_basis","text":"next_reordered_basis(basis, takers, differ)\n\nReturns the next reordered basis accroding to current basis.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.unsafe_reorder","page":"Manual","title":"BitBasis.unsafe_reorder","text":"unsafe_reorder(X::AbstractArray, orders)\n\nReorder X according to orders.\n\nwarning: Warning\nunsafe_reorder won't check whether the length of orders and the size of first dimension of X match, use at your own risk.\n\n\n\n\n\n","category":"function"},{"location":"man/#BitBasis.unsafe_sub-Union{Tuple{T}, Tuple{N}, Tuple{UnitRange{T},Tuple{Vararg{T,N}}}} where T where N","page":"Manual","title":"BitBasis.unsafe_sub","text":"unsafe_sub(a::UnitRange, b::NTuple{N}) -> NTuple{N}\n\nReturns result in type Tuple of a .- b. This will not check the length of a and b, use at your own risk.\n\n\n\n\n\n","category":"method"},{"location":"man/#BitBasis.unsafe_sub-Union{Tuple{T}, Tuple{UnitRange{T},Array{T,1}}} where T","page":"Manual","title":"BitBasis.unsafe_sub","text":"unsafe_sub(a::UnitRange{T}, b::Vector{T}) where T\n\nReturns a .- b, fallback version when b is a Vector.\n\n\n\n\n\n","category":"method"}]
}
