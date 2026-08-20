import React from 'react';

export const CalendarGrid: React.FC = () => {
    // October 2026 calendar starts on a Thursday (4 empty spots on Sun, Mon, Tue, Wed)
    // 31 days in October
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const totalDays = 31;
    const startOffset = 4; // Sun=0, Mon=1, Tue=2, Wed=3, Thu=4

    const calendarCells: (number | null)[] = [
        ...Array(startOffset).fill(null),
        ...Array.from({ length: totalDays }, (_, i) => i + 1)
    ];

    const weddingDay = 10;

    return (
        <div className="max-w-xs mx-auto p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-[#D4AF37]/35 shadow-md font-sans">
            <h4 className="text-center font-serif text-lg tracking-widest text-[#052219] font-bold uppercase mb-4">
                October 2026
            </h4>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-y-2 text-center mb-2">
                {daysOfWeek.map((day, idx) => (
                    <span key={idx} className="text-xs font-bold tracking-wider text-[#997010] uppercase">
                        {day}
                    </span>
                ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-y-3 text-center items-center justify-items-center">
                {calendarCells.map((day, idx) => {
                    if (day === null) {
                        return <div key={`empty-${idx}`} className="w-8 h-8" />;
                    }

                    const isWeddingDay = day === weddingDay;

                    return (
                        <div key={`day-${day}`} className="relative w-8 h-8 flex items-center justify-center">
                            {isWeddingDay ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Gold circle highlight */}
                                    <div className="w-9 h-9 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 flex items-center justify-center animate-pulse shadow-sm">
                                        <span className="font-serif text-[#052219] font-bold text-sm">
                                            {day}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <span className="font-serif text-gray-700 text-sm">
                                    {day}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>
    );
};

export default CalendarGrid;
