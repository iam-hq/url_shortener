export default function Container({
                                      children,
                                      size = 'max-w-7xl',
                                      padding = 'p-6',
                                      yPadding = "py-12",
                                      xPadding = 'sm:px-6 lg:px-8',
    transparent = false,
                                  }) {

    return (
        <div className={yPadding}>
            <div className={`${size} mx-auto ${xPadding}`}>
                <div className={`${transparent ? "" : "bg-white shadow-sm sm:rounded-lg"}  overflow-hidden`}>
                    <div className={`${padding} text-gray-900`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
