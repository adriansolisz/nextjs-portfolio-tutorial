const Header = () => {
    return (
        <div className="text-center border-b border-slate-300 p-4">
            <div className="text-2xl font-bold text-slate-700">
                John Smith
            </div>
            <div>
                Software developer
            </div>
            <div className="flex justify-center gap-2 text-sm">
                <div>
                    M: +1-045006000
                </div>
                <div>
                    E: john@software.com
                </div>
            </div>
        </div>
    );
};

export default Header;